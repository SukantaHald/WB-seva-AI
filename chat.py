from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional, List
import json
import uvicorn  # <-- This was missing

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ============ SCHEMES DATABASE ============
SCHEMES = [
    {
        "name": "Kanyashree Prakalpa",
        "category": "Women, Education",
        "description": "Cash transfer scheme for girl students in West Bengal",
        "eligibility": "Girls aged 13-18, studying in Class VIII-XII, family income < ₹1.2L",
        "benefits": "₹1000/year (13-18), ₹25,000 one-time at 18",
        "portal_url": "wbkanyashree.gov.in"
    },
    {
        "name": "SVMCM Scholarship",
        "category": "Students, Education",
        "description": "Merit-cum-means scholarship for higher education",
        "eligibility": "Students with 60%+ marks, family income < ₹2.5L",
        "benefits": "Tuition fees + maintenance allowance",
        "portal_url": "wbhed.gov.in"
    },
    {
        "name": "Student Credit Card",
        "category": "Students, Education",
        "description": "Interest-free education loan up to ₹10 Lakhs",
        "eligibility": "Permanent WB resident, age 18-45, pursuing higher education",
        "benefits": "Up to ₹10 Lakhs interest-free loan",
        "portal_url": "wbscc.wb.gov.in"
    },
    {
        "name": "Pradhan Mantri Awas Yojana",
        "category": "Housing, Urban Development",
        "description": "Affordable housing for urban poor",
        "eligibility": "EWS/LIG/MIG categories, no own house",
        "benefits": "Interest subsidy up to ₹2.67L",
        "portal_url": "pmaymis.gov.in"
    },
    {
        "name": "Bangla Awas Yojana",
        "category": "Housing, Rural Development",
        "description": "Housing scheme for rural West Bengal",
        "eligibility": "BPL families in rural areas",
        "benefits": "Financial assistance for house construction",
        "portal_url": "banglaawas.wb.gov.in"
    },
    {
        "name": "Oasis Scholarship",
        "category": "Students, Education",
        "description": "Scholarship for SC/ST/OBC students",
        "eligibility": "SC/ST/OBC students, 50%+ marks, family income < ₹2.5L",
        "benefits": "₹3,000-₹20,000 per year",
        "portal_url": "oasis.gov.in"
    },
    {
        "name": "Yuvashree Scheme",
        "category": "Employment, Youth",
        "description": "Employment support for educated unemployed youth",
        "eligibility": "Age 18-45, educational qualification, family income < ₹1.5L",
        "benefits": "Monthly allowance + job placement assistance",
        "portal_url": "wbyuvashree.wb.gov.in"
    }
]

# ============ API MODELS ============
class QueryRequest(BaseModel):
    question: str
    user_id: Optional[str] = "anonymous"

# ============ RESPONSE GENERATOR ============
def generate_response(query: str) -> dict:
    query_lower = query.lower()
    
    # Search for matching schemes
    matching_schemes = []
    for scheme in SCHEMES:
        if any(word in query_lower for word in scheme['name'].lower().split()) or \
           any(word in query_lower for word in scheme['category'].lower().split()) or \
           any(word in query_lower for word in scheme['description'].lower().split()):
            matching_schemes.append(scheme)
    
    # Limit to top 3
    matching_schemes = matching_schemes[:3]
    
    # Certificate query
    if any(word in query_lower for word in ['certificate', 'income certificate', 'caste certificate']):
        return {
            'response': """📄 **HOW TO GET YOUR CERTIFICATE**

**Where to Apply:**
• Urban: SDO Office (Sub-Divisional Officer)
• Rural: BDO Office (Block Development Officer)
• Also at: WBSeva Kendras

**Documents Required:**
1. Aadhaar Card
2. Voter ID / Ration Card
3. Passport size photos (2-3 copies)
4. Application form
5. Previous certificate (for renewal)

**Fees:**
• Income Certificate: ₹10-₹20
• Caste Certificate: ₹10-₹20

**Processing Time:** 7-15 working days

**Online:** edistrict.wb.gov.in

⚠️ Always verify requirements at your local office.""",
            'schemes': matching_schemes,
            'verified': True
        }
    
    # Job query
    if any(word in query_lower for word in ['job', 'wbpsc', 'government job', 'employment']):
        return {
            'response': """💼 **WEST BENGAL GOVERNMENT JOBS**

**WBPSC** (wbpsc.gov.in)
• Posts: Executive, Judicial, Allied Services
• Eligibility: Graduate
• Age: 21-36 years
• Pattern: Prelims + Mains + Interview

**West Bengal Police** (wbpolice.gov.in)
• Posts: Constable, Sub-Inspector
• Eligibility: 10+2 (Constable), Graduate (SI)

**ICDS (Anganwadi)**
• Posts: Anganwadi Worker, Helper
• Eligibility: 10th pass, local resident

**Health Department** (wbhealth.gov.in)
• Posts: Staff Nurse, Lab Technician, Doctor

📌 **Apply at respective department websites**""",
            'schemes': matching_schemes,
            'verified': True
        }
    
    # Lost document
    if any(word in query_lower for word in ['lost', 'ration card', 'lost card']):
        return {
            'response': """🆔 **LOST DOCUMENT? HERE'S WHAT TO DO**

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

**Step 4:** Fill "Duplicate" form, pay fee (₹50-₹200)

**Processing:** 7-15 working days

📌 **Links:**
• Ration Card: wbfood.wb.gov.in
• Aadhaar: uidai.gov.in""",
            'schemes': matching_schemes,
            'verified': True
        }
    
    # Student schemes
    if any(word in query_lower for word in ['student', 'study', 'b.tech', 'engineering', 'scholarship']):
        student_schemes = [s for s in SCHEMES if 'student' in s['category'].lower() or 'education' in s['category'].lower()]
        response = "🎓 **SCHEMES FOR STUDENTS**\n\n"
        for scheme in student_schemes[:3]:
            response += f"✅ **{scheme['name']}**\n"
            response += f"• {scheme['description'][:80]}...\n"
            response += f"• Portal: {scheme['portal_url']}\n\n"
        response += "📌 Apply on official portals only."
        return {
            'response': response,
            'schemes': student_schemes[:3],
            'verified': True
        }
    
    # Housing
    if any(word in query_lower for word in ['house', 'build', 'home', 'housing', 'awas']):
        housing_schemes = [s for s in SCHEMES if 'housing' in s['category'].lower()]
        response = "🏠 **HOUSING SCHEMES**\n\n"
        for scheme in housing_schemes[:2]:
            response += f"✅ **{scheme['name']}**\n"
            response += f"• {scheme['description'][:80]}...\n"
            response += f"• Portal: {scheme['portal_url']}\n\n"
        response += "📌 Visit official portals for detailed eligibility."
        return {
            'response': response,
            'schemes': housing_schemes[:2],
            'verified': True
        }
    
    # General response
    response = f"🔍 **Information about: {query}**\n\n"
    
    if matching_schemes:
        response += "📌 **Related Schemes:**\n"
        for scheme in matching_schemes[:3]:
            response += f"• **{scheme['name']}**: {scheme['description'][:80]}...\n"
            response += f"  ➜ {scheme['portal_url']}\n\n"
    else:
        response += "I couldn't find specific schemes for your query. Please try asking about:\n"
        response += "• Student schemes (Kanyashree, SVMCM)\n"
        response += "• Certificate application\n"
        response += "• Government jobs\n"
        response += "• Lost documents\n"
        response += "• Housing assistance\n\n"
    
    response += "⚠️ Always verify on official portals before applying."
    
    return {
        'response': response,
        'schemes': matching_schemes,
        'verified': bool(matching_schemes)
    }

# ============ API ENDPOINTS ============
@app.post("/api/chat")
async def chat(request: QueryRequest):
    try:
        result = generate_response(request.question)
        return result
    except Exception as e:
        return {
            'response': f"⚠️ Error: {str(e)}",
            'schemes': [],
            'verified': False
        }

@app.get("/api/schemes")
async def get_schemes():
    return {"schemes": SCHEMES}

@app.get("/")
async def root():
    return {"message": "WBseva AI API is running!"}

# ============ FOR LOCAL TESTING ============
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)