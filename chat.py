from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import json
import re
from typing import List, Optional
import sqlite3
from datetime import datetime
import os
import sys

# Add parent directory to path for imports
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ============ DATABASE SETUP ============
def get_db():
    # Use /tmp for Vercel (writable)
    db_path = '/tmp/wbseva.db'
    conn = sqlite3.connect(db_path)
    return conn

def init_db():
    conn = get_db()
    c = conn.cursor()
    
    c.execute('''CREATE TABLE IF NOT EXISTS schemes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        category TEXT,
        description TEXT,
        eligibility TEXT,
        benefits TEXT,
        documents TEXT,
        application_process TEXT,
        portal_url TEXT,
        department TEXT
    )''')
    
    conn.commit()
    conn.close()

def seed_schemes():
    schemes = [
        {
            "name": "Kanyashree Prakalpa",
            "category": "Women, Education",
            "description": "Cash transfer scheme for girl students in West Bengal",
            "eligibility": "Girls aged 13-18, studying in Class VIII-XII, family income < ₹1.2L",
            "benefits": "₹1000/year (13-18), ₹25,000 one-time at 18",
            "documents": "Birth Certificate, Bank Account, Income Certificate, School ID",
            "application_process": "Apply through school or wbkanyashree.gov.in",
            "portal_url": "wbkanyashree.gov.in",
            "department": "Women & Child Development"
        },
        {
            "name": "SVMCM Scholarship",
            "category": "Students, Education",
            "description": "Merit-cum-means scholarship for higher education",
            "eligibility": "Students with 60%+ marks, family income < ₹2.5L",
            "benefits": "Tuition fees + maintenance allowance",
            "documents": "Marksheet, Income Certificate, Aadhaar, Bank Account",
            "application_process": "Apply at wbhed.gov.in",
            "portal_url": "wbhed.gov.in",
            "department": "Higher Education"
        },
        {
            "name": "Student Credit Card",
            "category": "Students, Education",
            "description": "Interest-free education loan up to ₹10 Lakhs",
            "eligibility": "Permanent WB resident, age 18-45, pursuing higher education",
            "benefits": "Up to ₹10 Lakhs interest-free loan",
            "documents": "Aadhaar, Income Certificate, Admission Letter, Bank Account",
            "application_process": "Apply at wbscc.wb.gov.in",
            "portal_url": "wbscc.wb.gov.in",
            "department": "Higher Education"
        },
        {
            "name": "Pradhan Mantri Awas Yojana",
            "category": "Housing, Urban Development",
            "description": "Affordable housing for urban poor",
            "eligibility": "EWS/LIG/MIG categories, no own house",
            "benefits": "Interest subsidy up to ₹2.67L",
            "documents": "Aadhaar, Income Proof, Land Documents",
            "application_process": "Apply at pmaymis.gov.in",
            "portal_url": "pmaymis.gov.in",
            "department": "Housing & Urban Development"
        },
        {
            "name": "Bangla Awas Yojana",
            "category": "Housing, Rural Development",
            "description": "Housing scheme for rural West Bengal",
            "eligibility": "BPL families in rural areas",
            "benefits": "Financial assistance for house construction",
            "documents": "BPL Card, Aadhaar, Land Records",
            "application_process": "Apply at banglaawas.wb.gov.in",
            "portal_url": "banglaawas.wb.gov.in",
            "department": "Panchayat & Rural Development"
        },
        {
            "name": "Oasis Scholarship",
            "category": "Students, Education",
            "description": "Scholarship for SC/ST/OBC students",
            "eligibility": "SC/ST/OBC students, 50%+ marks, family income < ₹2.5L",
            "benefits": "₹3,000-₹20,000 per year",
            "documents": "Caste Certificate, Marksheet, Income Certificate",
            "application_process": "Apply at oasis.gov.in",
            "portal_url": "oasis.gov.in",
            "department": "Minority Affairs"
        },
        {
            "name": "Yuvashree Scheme",
            "category": "Employment, Youth",
            "description": "Employment support for educated unemployed youth",
            "eligibility": "Age 18-45, educational qualification, family income < ₹1.5L",
            "benefits": "Monthly allowance + job placement assistance",
            "documents": "Educational Certificates, Aadhaar, Income Proof",
            "application_process": "Apply at wbyuvashree.wb.gov.in",
            "portal_url": "wbyuvashree.wb.gov.in",
            "department": "Youth Affairs"
        }
    ]
    
    conn = get_db()
    c = conn.cursor()
    
    for scheme in schemes:
        c.execute('''INSERT OR IGNORE INTO schemes 
            (name, category, description, eligibility, benefits, documents, application_process, portal_url, department)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)''',
            (scheme['name'], scheme['category'], scheme['description'], 
             scheme['eligibility'], scheme['benefits'], scheme['documents'],
             scheme['application_process'], scheme['portal_url'], scheme['department']))
    
    conn.commit()
    conn.close()

# ============ RAG SYSTEM ============
class RAGSystem:
    def __init__(self):
        init_db()
        seed_schemes()
        self.conn = get_db()
        self.c = self.conn.cursor()
        
    def search_schemes(self, query: str) -> List[dict]:
        keywords = query.lower().split()
        search_pattern = '%' + '%'.join(keywords[:3]) + '%'
        
        self.c.execute('''SELECT * FROM schemes WHERE 
                         LOWER(name) LIKE ? OR 
                         LOWER(category) LIKE ? OR 
                         LOWER(description) LIKE ? OR 
                         LOWER(eligibility) LIKE ?''',
                      (search_pattern, search_pattern, search_pattern, search_pattern))
        results = self.c.fetchall()
        
        schemes = []
        for row in results:
            schemes.append({
                'id': row[0],
                'name': row[1],
                'category': row[2],
                'description': row[3],
                'eligibility': row[4],
                'benefits': row[5],
                'documents': row[6],
                'application_process': row[7],
                'portal_url': row[8],
                'department': row[9]
            })
        return schemes[:5]

# ============ AI RESPONSE ENGINE ============
class WBSevaAI:
    def __init__(self):
        self.rag = RAGSystem()
        
    def generate_response(self, user_query: str) -> dict:
        relevant_schemes = self.rag.search_schemes(user_query)
        query_lower = user_query.lower()
        
        # Certificate query
        if any(word in query_lower for word in ['certificate', 'income certificate', 'caste certificate']):
            return {
                'response': self.handle_certificate(),
                'schemes': relevant_schemes,
                'verified': True
            }
        
        # Job query
        if any(word in query_lower for word in ['job', 'wbpsc', 'government job', 'employment']):
            return {
                'response': self.handle_job(),
                'schemes': relevant_schemes,
                'verified': True
            }
        
        # Lost document
        if any(word in query_lower for word in ['lost', 'ration card', 'lost card']):
            return {
                'response': self.handle_lost_document(),
                'schemes': relevant_schemes,
                'verified': True
            }
        
        # Student schemes
        if any(word in query_lower for word in ['student', 'study', 'b.tech', 'engineering']):
            return {
                'response': self.handle_student(relevant_schemes),
                'schemes': relevant_schemes,
                'verified': True
            }
        
        # Housing
        if any(word in query_lower for word in ['house', 'build', 'home', 'housing']):
            return {
                'response': self.handle_housing(),
                'schemes': relevant_schemes,
                'verified': True
            }
        
        # General response
        return {
            'response': self.handle_general(user_query, relevant_schemes),
            'schemes': relevant_schemes,
            'verified': False
        }
    
    def handle_certificate(self):
        return """📄 **HOW TO GET YOUR CERTIFICATE**

**Where to Apply:**
• Urban: SDO Office (Sub-Divisional Officer)
• Rural: BDO Office (Block Development Officer)
• Also at: WBSeva Kendras

**Documents Required:**
1. Aadhaar Card
2. Voter ID / Ration Card (address proof)
3. Passport size photos (2-3 copies)
4. Application form
5. Previous certificate (for renewal)

**Fees:**
• Income Certificate: ₹10-₹20
• Caste Certificate: ₹10-₹20
• Domicile Certificate: ₹20-₹50

**Processing Time:** 7-15 working days

**Online:** edistrict.wb.gov.in

⚠️ Always verify requirements at your local office."""
    
    def handle_job(self):
        return """💼 **WEST BENGAL GOVERNMENT JOBS**

**WBPSC** (wbpsc.gov.in)
• Posts: Executive, Judicial, Allied Services
• Eligibility: Graduate
• Age: 21-36 years
• Pattern: Prelims + Mains + Interview

**West Bengal Police** (wbpolice.gov.in)
• Posts: Constable, Sub-Inspector
• Eligibility: 10+2 (Constable), Graduate (SI)
• Physical Test required

**ICDS (Anganwadi)**
• Posts: Anganwadi Worker, Helper
• Eligibility: 10th pass, local resident

**Health Department** (wbhealth.gov.in)
• Posts: Staff Nurse, Lab Technician, Doctor

📌 **Apply at respective department websites"""
    
    def handle_lost_document(self):
        return """🆔 **LOST DOCUMENT? HERE'S WHAT TO DO**

**Step 1:** File FIR at police station
**Step 2:** Gather documents:
• FIR Copy (mandatory)
• Aadhaar Card
• Address Proof
• Passport size photos

**Step 3:** Visit issuing office:
• Ration Card: Food & Supplies Office
• Voter ID: Election Commission Office
• Aadhaar: UIDAI Center
• Birth Certificate: Municipality

**Step 4:** Fill "Duplicate" form, pay fee (₹50-₹200)

**Processing:** 7-15 working days

📌 **Links:**
• Ration Card: wbfood.wb.gov.in
• Aadhaar: uidai.gov.in"""
    
    def handle_student(self, schemes):
        response = "🎓 **SCHEMES FOR STUDENTS**\n\n"
        for scheme in schemes[:3]:
            response += f"✅ **{scheme['name']}**\n"
            response += f"• {scheme['description'][:100]}...\n"
            response += f"• Portal: {scheme['portal_url']}\n\n"
        response += "📌 Apply on official portals only."
        return response
    
    def handle_housing(self):
        return """🏠 **HOUSING SCHEMES**

**Pradhan Mantri Awas Yojana**
• For EWS/LIG/MIG categories
• Interest subsidy up to ₹2.67L
• Apply: pmaymis.gov.in

**Bangla Awas Yojana**
• For BPL families in rural areas
• Financial assistance for house construction
• Apply: banglaawas.wb.gov.in

**Documents Needed:**
• Aadhaar Card
• Income Proof
• Land documents

📌 Visit official portals for detailed eligibility."""
    
    def handle_general(self, query, schemes):
        response = f"🔍 **Information about: {query}**\n\n"
        
        if schemes:
            response += "📌 **Related Schemes:**\n"
            for scheme in schemes[:3]:
                response += f"• {scheme['name']}: {scheme['description'][:80]}...\n"
                response += f"  ➜ {scheme['portal_url']}\n\n"
        
        response += """💡 **Try asking about:**
• Student schemes (Kanyashree, SVMCM)
• Certificate application
• Government jobs
• Lost documents
• Housing assistance

⚠️ Always verify on official portals before applying."""
        
        return response

# ============ API ENDPOINTS ============
class QueryRequest(BaseModel):
    question: str
    user_id: Optional[str] = "anonymous"

ai_system = WBSevaAI()

@app.post("/api/chat")
async def chat(request: QueryRequest):
    try:
        result = ai_system.generate_response(request.question)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/schemes")
async def get_schemes():
    conn = get_db()
    c = conn.cursor()
    c.execute('SELECT * FROM schemes LIMIT 20')
    results = c.fetchall()
    conn.close()
    
    schemes = []
    for row in results:
        schemes.append({
            'id': row[0],
            'name': row[1],
            'category': row[2],
            'description': row[3],
            'portal_url': row[8],
            'department': row[9]
        })
    return {"schemes": schemes}

# Vercel handler
def handler(request, context):
    return app(request, context)