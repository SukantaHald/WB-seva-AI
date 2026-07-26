from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional, List
import json
import sys
import os

# Add parent directory to path for Vercel
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

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
        "eligibility": "Girls aged 13-18, studying in Class VIII-XII, family income below 1.2L",
        "benefits": "1000 per year (13-18), 25000 one-time at 18",
        "portal_url": "wbkanyashree.gov.in"
    },
    {
        "name": "SVMCM Scholarship",
        "category": "Students, Education",
        "description": "Merit-cum-means scholarship for higher education",
        "eligibility": "Students with 60 percent marks, family income below 2.5L",
        "benefits": "Tuition fees plus maintenance allowance",
        "portal_url": "wbhed.gov.in"
    },
    {
        "name": "Student Credit Card",
        "category": "Students, Education",
        "description": "Interest-free education loan up to 10 Lakhs",
        "eligibility": "Permanent WB resident, age 18-45, pursuing higher education",
        "benefits": "Up to 10 Lakhs interest-free loan",
        "portal_url": "wbscc.wb.gov.in"
    },
    {
        "name": "Pradhan Mantri Awas Yojana",
        "category": "Housing, Urban Development",
        "description": "Affordable housing for urban poor",
        "eligibility": "EWS or LIG or MIG categories, no own house",
        "benefits": "Interest subsidy up to 2.67L",
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
        "description": "Scholarship for SC or ST or OBC students",
        "eligibility": "SC or ST or OBC students, 50 percent marks, family income below 2.5L",
        "benefits": "3000 to 20000 per year",
        "portal_url": "oasis.gov.in"
    },
    {
        "name": "Yuvashree Scheme",
        "category": "Employment, Youth",
        "description": "Employment support for educated unemployed youth",
        "eligibility": "Age 18-45, educational qualification, family income below 1.5L",
        "benefits": "Monthly allowance plus job placement assistance",
        "portal_url": "wbyuvashree.wb.gov.in"
    },
    {
        "name": "WB Police Recruitment",
        "category": "Employment, Jobs",
        "description": "West Bengal Police recruitment for constable and SI posts",
        "eligibility": "10+2 for Constable, Graduate for SI",
        "benefits": "Government job with benefits",
        "portal_url": "wbpolice.gov.in"
    },
    {
        "name": "WBPSC Civil Services",
        "category": "Employment, Jobs",
        "description": "West Bengal Public Service Commission civil services exam",
        "eligibility": "Graduate, age 21-36 years",
        "benefits": "Executive and Judicial services",
        "portal_url": "wbpsc.gov.in"
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
        scheme_text = scheme['name'].lower() + ' ' + scheme['category'].lower() + ' ' + scheme['description'].lower()
        if any(word in scheme_text for word in query_lower.split()[:3]):
            if scheme not in matching_schemes:
                matching_schemes.append(scheme)
    
    # Limit to top 3
    matching_schemes = matching_schemes[:3]
    
    # Check if this is the first message or greeting
    if any(word in query_lower for word in ['hello', 'hi', 'namaskar', 'hey', 'greeting']):
        return {
            'response': """Namaskar! I'm WBseva AI, your smart assistant for West Bengal government services.

I can help you with:
- Student Schemes - Kanyashree, SVMCM, Scholarships
- Certificates - Income, Caste, Domicile
- Government Jobs - WBPSC, Police, Health
- Housing - PMAY, Bangla Awas
- Lost Documents - Ration Card, Voter ID

Try asking:
Which schemes are for students?
How to get Income Certificate?
What government jobs are available?""",
            'schemes': matching_schemes,
            'verified': True
        }
    
    # Certificate query
    if any(word in query_lower for word in ['certificate', 'income certificate', 'caste certificate', 'domicile', 'ews']):
        return {
            'response': """HOW TO GET YOUR CERTIFICATE IN WEST BENGAL

Where to Apply:
- Urban areas: SDO Office (Sub-Divisional Officer)
- Rural areas: BDO Office (Block Development Officer)
- Also available at: WBSeva Kendras

Documents Required:
1. Aadhaar Card
2. Voter ID or Ration Card
3. Passport size photos
4. Application form
5. Previous certificate (for renewal)

Fees:
- Income Certificate: Rs 10-20
- Caste Certificate: Rs 10-20
- Domicile Certificate: Rs 20-50

Processing Time: 7-15 working days

Apply Online: edistrict.wb.gov.in

Always verify requirements at your local office before applying.""",
            'schemes': matching_schemes,
            'verified': True
        }
    
    # Job query
    if any(word in query_lower for word in ['job', 'wbpsc', 'government job', 'employment', 'police', 'recruitment', 'vacancy']):
        jobs = [s for s in SCHEMES if 'job' in s['category'].lower() or 'employment' in s['category'].lower()]
        response = """WEST BENGAL GOVERNMENT JOBS

WBPSC (West Bengal Public Service Commission)
- Website: wbpsc.gov.in
- Posts: Executive, Judicial, Allied Services
- Eligibility: Graduate (varies by post)
- Age: 21-36 years
- Exam Pattern: Prelims + Mains + Interview

West Bengal Police
- Website: wbpolice.gov.in
- Posts: Constable, Sub-Inspector (SI)
- Eligibility: 10+2 (Constable), Graduate (SI)
- Physical Test required

ICDS (Anganwadi)
- Posts: Anganwadi Worker, Helper
- Eligibility: 10th pass, local resident
- Preference: Women candidates

Health Department
- Website: wbhealth.gov.in
- Posts: Staff Nurse, Lab Technician, Doctor

Documents Needed:
- Educational certificates
- Caste certificate (if applicable)
- Aadhaar card
- Photo ID proof"""
        
        if jobs:
            response += "\n\nCurrent Openings:\n"
            for job in jobs[:2]:
                response += "- " + job['name'] + " - " + job['portal_url'] + "\n"
        
        return {
            'response': response,
            'schemes': jobs[:3],
            'verified': True
        }
    
    # Lost document
    if any(word in query_lower for word in ['lost', 'ration card', 'lost card', 'voter id lost', 'aadhaar lost']):
        return {
            'response': """LOST YOUR DOCUMENT? HERE'S WHAT TO DO

Step 1: File an FIR
- Visit your nearest police station
- Lodge a complaint about the lost document
- Get a copy of the FIR (VERY IMPORTANT)

Step 2: Gather Documents
- FIR Copy (mandatory)
- Aadhaar Card
- Address Proof
- Passport size photos

Step 3: Visit the Issuing Office
- Ration Card: Food and Supplies Office
- Voter ID: Election Commission Office
- Aadhaar: UIDAI Center
- Birth Certificate: Municipality

Step 4: Submit Application
- Fill the Duplicate form
- Attach all required documents
- Pay fee (Rs 50-200)

Step 5: Follow Up
- Get acknowledgment receipt
- Check status online
- Usually takes 7-15 working days

Quick Links:
- Ration Card: wbfood.wb.gov.in
- Aadhaar: uidai.gov.in
- Birth Certificate: edistrict.wb.gov.in""",
            'schemes': matching_schemes,
            'verified': True
        }
    
    # Student schemes
    if any(word in query_lower for word in ['student', 'study', 'b.tech', 'engineering', 'scholarship', 'school', 'college', 'university']):
        student_schemes = [s for s in SCHEMES if 'student' in s['category'].lower() or 'education' in s['category'].lower()]
        response = """SCHEMES FOR STUDENTS IN WEST BENGAL

Here are the top scholarships and schemes for students:

1. Kanyashree Prakalpa
- For girls aged 13-18 years
- Studying in Class VIII-XII
- Family income below 1.2 Lakhs per year
- Benefit: 1000 per year + 25000 one-time
- Apply: wbkanyashree.gov.in

2. SVMCM Scholarship
- Merit-cum-means scholarship
- 60 percent marks required
- Family income below 2.5 Lakhs per year
- Covers tuition + maintenance
- Apply: wbhed.gov.in

3. Student Credit Card
- Interest-free education loan
- Up to 10 Lakhs
- For higher education
- Apply: wbscc.wb.gov.in

4. Oasis Scholarship
- For SC or ST or OBC students
- 50 percent marks required
- 3000 to 20000 per year
- Apply: oasis.gov.in

Documents Needed:
- Marksheet
- Income Certificate
- Caste Certificate (if applicable)
- Aadhaar Card
- Bank Account details

Always check official portals for updated eligibility and deadlines."""
        
        if student_schemes:
            response += "\n\nRelated Schemes:\n"
            for s in student_schemes[:2]:
                response += "- " + s['name'] + " - " + s['portal_url'] + "\n"
        
        return {
            'response': response,
            'schemes': student_schemes[:3],
            'verified': True
        }
    
    # Housing
    if any(word in query_lower for word in ['house', 'build', 'home', 'housing', 'awas', 'pmay', 'bangla awas']):
        housing_schemes = [s for s in SCHEMES if 'housing' in s['category'].lower()]
        response = """HOUSING SCHEMES IN WEST BENGAL

1. Pradhan Mantri Awas Yojana (PMAY)
- Affordable housing for urban poor
- Eligibility: EWS or LIG or MIG categories
- Benefit: Interest subsidy up to 2.67L
- Apply: pmaymis.gov.in

2. Bangla Awas Yojana
- Housing for rural West Bengal
- Eligibility: BPL families in rural areas
- Financial assistance for house construction
- Apply: banglaawas.wb.gov.in

Documents Needed:
- Aadhaar Card
- Income Proof
- Land documents
- Ration Card

Important:
- Check eligibility on official portals
- Apply online or at local office
- Keep documents ready before applying

Beware of frauds: All applications are free."""
        
        if housing_schemes:
            response += "\n\nRelated Schemes:\n"
            for s in housing_schemes[:2]:
                response += "- " + s['name'] + " - " + s['portal_url'] + "\n"
        
        return {
            'response': response,
            'schemes': housing_schemes[:2] if housing_schemes else matching_schemes,
            'verified': True
        }
    
    # General response
    response = "I'm here to help with: " + query + "\n\n"
    
    if matching_schemes:
        response += "Related Schemes Found:\n"
        for scheme in matching_schemes[:3]:
            response += "- " + scheme['name'] + "\n"
            response += "  " + scheme['description'][:80] + "...\n"
            response += "  Apply: " + scheme['portal_url'] + "\n\n"
    else:
        response += """I can help you with these topics:

Student Services
- Scholarships (Kanyashree, SVMCM, Oasis)
- Student Credit Card
- Education loans

Certificates
- Income Certificate
- Caste Certificate
- Domicile Certificate
- EWS Certificate

Jobs and Careers
- WBPSC exams
- Police recruitment
- Health department jobs
- ICDS (Anganwadi)

Housing
- PMAY (Pradhan Mantri Awas Yojana)
- Bangla Awas Yojana

Lost Documents
- Ration Card replacement
- Voter ID re-issue
- Aadhaar update

Please be specific about what you need help with!"""
    
    response += "\n\nAlways verify information on official government portals before applying."
    
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
            'response': "Error: " + str(e) + ". Please try again.",
            'schemes': [],
            'verified': False
        }

@app.get("/api/schemes")
async def get_schemes():
    return {"schemes": SCHEMES}

@app.get("/api/test")
async def test():
    return {"status": "ok", "message": "API is working!"}

@app.get("/")
async def root():
    return {"message": "WBseva AI API is running!", "status": "ok"}

# ============ FOR LOCAL TESTING ============
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)