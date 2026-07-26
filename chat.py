from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from typing import Optional, List
import json
import re

app = FastAPI()

# Enable CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ============================================
# SCHEMES DATABASE (Complete WB Government Schemes)
# ============================================
SCHEMES = [
    {
        "name": "Kanyashree Prakalpa",
        "category": "Women, Education",
        "description": "Cash transfer scheme for girl students in West Bengal",
        "eligibility": "Girls aged 13-18, studying Class VIII-XII, family income below ₹1.2L",
        "benefits": "₹1000/year (13-18), ₹25,000 one-time at 18",
        "documents": "Birth Certificate, Bank Account, Income Certificate, School ID",
        "portal": "wbkanyashree.gov.in"
    },
    {
        "name": "SVMCM Scholarship",
        "category": "Students, Education",
        "description": "Merit-cum-means scholarship for higher education",
        "eligibility": "60%+ marks, family income below ₹2.5L",
        "benefits": "Full tuition fees + maintenance allowance",
        "documents": "Marksheet, Income Certificate, Aadhaar, Bank Account",
        "portal": "wbhed.gov.in"
    },
    {
        "name": "Student Credit Card",
        "category": "Students, Education",
        "description": "Interest-free education loan up to ₹10 Lakhs",
        "eligibility": "WB resident, age 18-45, pursuing higher education",
        "benefits": "Up to ₹10 Lakhs interest-free loan",
        "documents": "Aadhaar, Income Certificate, Admission Letter, Bank Account",
        "portal": "wbscc.wb.gov.in"
    },
    {
        "name": "Pradhan Mantri Awas Yojana",
        "category": "Housing, Urban",
        "description": "Affordable housing for urban poor with interest subsidy",
        "eligibility": "EWS/LIG/MIG categories, no own house",
        "benefits": "Interest subsidy up to ₹2.67L",
        "documents": "Aadhaar, Income Proof, Land Documents",
        "portal": "pmaymis.gov.in"
    },
    {
        "name": "Bangla Awas Yojana",
        "category": "Housing, Rural",
        "description": "Housing scheme for rural West Bengal families",
        "eligibility": "BPL families in rural areas",
        "benefits": "Financial assistance for house construction",
        "documents": "BPL Card, Aadhaar, Land Records",
        "portal": "banglaawas.wb.gov.in"
    },
    {
        "name": "Oasis Scholarship",
        "category": "Students, Education",
        "description": "Scholarship for SC/ST/OBC students",
        "eligibility": "SC/ST/OBC students, 50%+ marks, family income below ₹2.5L",
        "benefits": "₹3,000-₹20,000 per year",
        "documents": "Caste Certificate, Marksheet, Income Certificate",
        "portal": "oasis.gov.in"
    },
    {
        "name": "Yuvashree Scheme",
        "category": "Employment, Youth",
        "description": "Employment support for educated unemployed youth",
        "eligibility": "Age 18-45, qualified, family income below ₹1.5L",
        "benefits": "Monthly allowance + job placement assistance",
        "documents": "Educational Certificates, Aadhaar, Income Proof",
        "portal": "wbyuvashree.wb.gov.in"
    },
    {
        "name": "WBPSC Civil Services",
        "category": "Jobs, Government",
        "description": "West Bengal Public Service Commission civil services exam",
        "eligibility": "Graduate, age 21-36 years",
        "benefits": "Executive, Judicial, and Allied Services",
        "documents": "Educational Certificates, Caste Certificate, Photo ID",
        "portal": "wbpsc.gov.in"
    },
    {
        "name": "West Bengal Police Recruitment",
        "category": "Jobs, Government",
        "description": "Recruitment for police constable and SI posts",
        "eligibility": "10+2 for Constable, Graduate for SI",
        "benefits": "Government job with benefits",
        "documents": "Educational Certificates, Physical Fitness Certificate",
        "portal": "wbpolice.gov.in"
    },
    {
        "name": "ICDS Anganwadi Worker",
        "category": "Jobs, Women",
        "description": "Anganwadi worker and helper positions",
        "eligibility": "10th pass, local resident, women preferred",
        "benefits": "Honorarium + government benefits",
        "documents": "Educational Certificate, Residence Proof, Aadhaar",
        "portal": "icds.wb.gov.in"
    },
    {
        "name": "Swami Vivekananda Scholarship",
        "category": "Students, Education",
        "description": "Scholarship for minority and economically backward students",
        "eligibility": "Minority community, 50%+ marks, family income below ₹2L",
        "benefits": "₹5,000-₹15,000 per year",
        "documents": "Minority Certificate, Marksheet, Income Certificate",
        "portal": "svmcm.wb.gov.in"
    },
    {
        "name": "Ration Card Services",
        "category": "Documents, Services",
        "description": "Apply for new ration card or replacement of lost card",
        "eligibility": "WB resident, BPL/APL categories",
        "benefits": "Food security and subsidy benefits",
        "documents": "Aadhaar, Address Proof, Income Certificate",
        "portal": "wbfood.wb.gov.in"
    },
    {
        "name": "Income Certificate",
        "category": "Documents, Certificates",
        "description": "Apply for income certificate for various government schemes",
        "eligibility": "Any WB resident",
        "benefits": "Required for scholarship, jobs, and welfare schemes",
        "documents": "Aadhaar, Ration Card, Photo, Application Form",
        "portal": "edistrict.wb.gov.in"
    },
    {
        "name": "Caste Certificate",
        "category": "Documents, Certificates",
        "description": "Apply for SC/ST/OBC caste certificate",
        "eligibility": "SC/ST/OBC community members in WB",
        "benefits": "Reservation benefits in education and jobs",
        "documents": "Aadhaar, Address Proof, Community Proof",
        "portal": "edistrict.wb.gov.in"
    },
    {
        "name": "Domicile Certificate",
        "category": "Documents, Certificates",
        "description": "Apply for West Bengal domicile certificate",
        "eligibility": "Permanent resident of West Bengal",
        "benefits": "Required for state government jobs and schemes",
        "documents": "Aadhaar, Ration Card, Voter ID, Land Records",
        "portal": "edistrict.wb.gov.in"
    }
]

# ============================================
# KNOWLEDGE BASE (For FAQ-style answers)
# ============================================
KNOWLEDGE = {
    "student": {
        "keywords": ["student", "school", "college", "university", "study", "engineering", "medical", "graduation"],
        "response": """🎓 **STUDENT SCHEMES IN WEST BENGAL**

**1. Kanyashree Prakalpa** 👧
• Girls aged 13-18 years, Class VIII-XII
• Family income below ₹1.2L
• ₹1000/year + ₹25,000 one-time grant
• Apply: wbkanyashree.gov.in

**2. SVMCM Scholarship** 📚
• 60%+ marks required
• Family income below ₹2.5L
• Full tuition + maintenance allowance
• Apply: wbhed.gov.in

**3. Student Credit Card** 💳
• Interest-free education loan up to ₹10L
• Age 18-45, pursuing higher education
• Apply: wbscc.wb.gov.in

**4. Oasis Scholarship** 🏅
• For SC/ST/OBC students
• 50%+ marks required
• ₹3,000-₹20,000 per year
• Apply: oasis.gov.in

**Documents Needed:**
• Marksheet • Income Certificate • Caste Certificate (if applicable)
• Aadhaar Card • Bank Account details"""
    },
    "certificate": {
        "keywords": ["certificate", "income certificate", "caste certificate", "domicile", "ews", "obc"],
        "response": """📄 **HOW TO GET CERTIFICATES IN WEST BENGAL**

**Where to Apply:**
• Urban: SDO Office (Sub-Divisional Officer)
• Rural: BDO Office (Block Development Officer)
• Also at: WBSeva Kendras

**Income Certificate:**
• Documents: Aadhaar, Ration Card, Photo, Application Form
• Fee: ₹10-₹20
• Processing: 7-15 days

**Caste Certificate:**
• Documents: Aadhaar, Address Proof, Community Proof
• Fee: ₹10-₹20
• Processing: 7-15 days

**Domicile Certificate:**
• Documents: Aadhaar, Ration Card, Voter ID, Land Records
• Fee: ₹20-₹50
• Processing: 7-15 days

**Online:** edistrict.wb.gov.in

⚠️ **Always verify requirements at your local office.**"""
    },
    "job": {
        "keywords": ["job", "government job", "wbpsc", "police", "employment", "recruitment", "vacancy"],
        "response": """💼 **GOVERNMENT JOBS IN WEST BENGAL**

**WBPSC Civil Services** 📌
• Website: wbpsc.gov.in
• Posts: Executive, Judicial, Allied Services
• Eligibility: Graduate, 21-36 years
• Pattern: Prelims + Mains + Interview

**West Bengal Police** 👮
• Website: wbpolice.gov.in
• Posts: Constable, Sub-Inspector
• Eligibility: 10+2 (Constable), Graduate (SI)

**Health Department** 🏥
• Website: wbhealth.gov.in
• Posts: Staff Nurse, Lab Technician, Doctor
• Eligibility: Relevant degree/diploma

**ICDS (Anganwadi)** 👩‍🏫
• Posts: Anganwadi Worker, Helper
• Eligibility: 10th pass, local resident

**Documents Needed:**
• Educational Certificates • Caste Certificate • Aadhaar Card
• Photo ID proof • Passport size photos

📌 **Check official websites for latest notifications.**"""
    },
    "housing": {
        "keywords": ["house", "home", "housing", "awas", "pmay", "bangla awas", "construction"],
        "response": """🏠 **HOUSING SCHEMES IN WEST BENGAL**

**1. Pradhan Mantri Awas Yojana** 🏡
• For urban poor (EWS/LIG/MIG)
• Interest subsidy up to ₹2.67L
• Apply: pmaymis.gov.in

**2. Bangla Awas Yojana** 🏘️
• For rural BPL families
• Financial assistance for house construction
• Apply: banglaawas.wb.gov.in

**Documents Needed:**
✅ Aadhaar Card
✅ Income Proof
✅ Land documents
✅ Ration Card

⚠️ **Beware of frauds:** Applications are FREE. No one should charge you.

📌 **Check eligibility on official portals before applying.**"""
    },
    "lost_document": {
        "keywords": ["lost", "ration card lost", "lost card", "document lost", "voter id lost", "aadhaar lost"],
        "response": """🆔 **LOST DOCUMENT? HERE'S WHAT TO DO**

**Step 1: File FIR** 🚨
• Visit nearest police station
• Lodge complaint about lost document
• Get FIR copy (VERY IMPORTANT)

**Step 2: Gather Documents** 📋
• FIR Copy (mandatory)
• Aadhaar Card (any valid ID)
• Address Proof
• Passport size photos

**Step 3: Visit Issuing Office** 🏢
• Ration Card: Food & Supplies Office
• Voter ID: Election Commission Office
• Aadhaar: UIDAI Center
• Birth Certificate: Municipality

**Step 4: Submit Application** 📝
• Fill "Duplicate" or "Re-issue" form
• Attach all documents
• Pay prescribed fee (₹50-₹200)

**Processing:** 7-15 working days

**Quick Links:**
• Ration Card: wbfood.wb.gov.in
• Aadhaar: uidai.gov.in
• Birth Certificate: edistrict.wb.gov.in"""
    }
}

# ============================================
# SEARCH FUNCTION
# ============================================
def search_schemes(query: str) -> List[dict]:
    """Search schemes based on query keywords"""
    query_lower = query.lower()
    results = []
    
    for scheme in SCHEMES:
        # Search in name, category, description, eligibility
        search_text = (scheme['name'] + ' ' + scheme['category'] + ' ' + 
                      scheme['description'] + ' ' + scheme['eligibility']).lower()
        
        # Check for keyword matches
        keywords = query_lower.split()
        score = 0
        for keyword in keywords:
            if len(keyword) > 2 and keyword in search_text:
                score += 1
        
        if score > 0:
            results.append((score, scheme))
    
    # Sort by score (highest first) and return top 3
    results.sort(key=lambda x: x[0], reverse=True)
    return [scheme for _, scheme in results[:3]]

# ============================================
# RESPONSE GENERATOR (PURE PYTHON - NO EXTERNAL API)
# ============================================
def generate_response(query: str) -> dict:
    """Generate response using rules and knowledge base"""
    query_lower = query.lower().strip()
    
    # Check if it's a greeting
    if any(word in query_lower for word in ['hello', 'hi', 'namaskar', 'hey', 'greeting', 'good morning', 'good evening']):
        return {
            "response": """👋 **Namaskar!** I'm WBseva AI, your smart assistant for West Bengal government services.

I can help you with:
• 🎓 **Student Schemes** - Kanyashree, SVMCM, Scholarships
• 📄 **Certificates** - Income, Caste, Domicile
• 💼 **Government Jobs** - WBPSC, Police, Health
• 🏠 **Housing** - PMAY, Bangla Awas
• 🆔 **Lost Documents** - Ration Card, Voter ID

**Try asking:**
"Which schemes are for students?"
"How to get Income Certificate?"
"What government jobs are available?"
"My ration card is lost" """,
            "schemes": [],
            "verified": True
        }
    
    # Check knowledge base for topics
    for topic, data in KNOWLEDGE.items():
        if any(keyword in query_lower for keyword in data["keywords"]):
            schemes = search_schemes(query)
            if schemes:
                extra = "\n\n📌 **Related Schemes:**\n"
                for s in schemes[:2]:
                    extra += f"• **{s['name']}** - {s['portal']}\n"
                return {
                    "response": data["response"] + extra,
                    "schemes": schemes,
                    "verified": True
                }
            return {
                "response": data["response"],
                "schemes": [],
                "verified": True
            }
    
    # General search - find schemes
    schemes = search_schemes(query)
    
    if schemes:
        response = "🔍 **I found these schemes for you:**\n\n"
        for scheme in schemes:
            response += f"**{scheme['name']}**\n"
            response += f"• {scheme['description']}\n"
            response += f"• Eligibility: {scheme['eligibility']}\n"
            response += f"• Benefits: {scheme['benefits']}\n"
            response += f"• Apply: {scheme['portal']}\n\n"
        response += "⚠️ Always verify details on the official portal."
        return {
            "response": response,
            "schemes": schemes,
            "verified": True
        }
    
    # No matches found
    return {
        "response": """🤔 **I couldn't find specific information about that.**

**Try asking about:**
• Student schemes (Kanyashree, SVMCM, Student Credit Card)
• Certificates (Income, Caste, Domicile)
• Government jobs (WBPSC, Police, Health)
• Housing (PMAY, Bangla Awas)
• Lost documents (Ration Card, Voter ID)
• Scholarship (Oasis, SVMCM, Kanyashree)

**Or be more specific like:**
"How to apply for Kanyashree?"
"What is the eligibility for SVMCM?"
"Where to get Income Certificate?"

⚠️ Always verify information on official government portals.""",
        "schemes": [],
        "verified": False
    }

# ============================================
# API ENDPOINTS
# ============================================
class ChatRequest(BaseModel):
    question: str
    user_id: Optional[str] = "anonymous"

@app.post("/api/chat")
async def chat(request: ChatRequest):
    try:
        result = generate_response(request.question)
        return JSONResponse(content=result)
    except Exception as e:
        return JSONResponse(
            content={
                "response": f"⚠️ Error: {str(e)}. Please try again.",
                "schemes": [],
                "verified": False
            },
            status_code=500
        )

@app.get("/api/schemes")
async def get_all_schemes():
    return JSONResponse(content={"schemes": SCHEMES})

@app.get("/api/schemes/search")
async def search(q: str):
    results = search_schemes(q)
    return JSONResponse(content={"schemes": results})

@app.get("/api/categories")
async def get_categories():
    categories = list(set(s["category"] for s in SCHEMES))
    return JSONResponse(content={"categories": categories})

@app.get("/")
async def root():
    return JSONResponse(content={
        "message": "WBseva AI API is running!",
        "status": "online",
        "version": "1.0.0",
        "schemes_count": len(SCHEMES)
    })

@app.get("/api/health")
async def health_check():
    return JSONResponse(content={"status": "healthy", "schemes": len(SCHEMES)})

# ============================================
# LOCAL DEVELOPMENT
# ============================================
if __name__ == "__main__":
    import uvicorn
    print("🚀 WBseva AI API Starting...")
    print(f"📊 Loaded {len(SCHEMES)} schemes")
    print("📍 http://localhost:8000")
    uvicorn.run(app, host="0.0.0.0", port=8000)