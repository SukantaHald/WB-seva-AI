// ============================================
// COMPLETE SCRIPT.JS - CLEAN VERSION
// ============================================

// ============================================
// ALL SCHEMES DATA (14 Categories)
// ============================================
const allSchemesData = {
    education: [
{ id: 'edu1', title: 'Swami Vivekananda Merit-cum-Means Scholarship (SVMCM)', category: 'Education', state: 'West Bengal', level: 'State', subsidy: '₹1,000–8,000/month', overview: 'Merit-cum-means scholarship for eligible students from Higher Secondary to PhD level.', applyLink: 'https://svmcm.wbhed.gov.in', tags: ['Scholarship', 'Merit', 'Higher Education'], eligibility: ['West Bengal Resident', 'Minimum Required Marks', 'Family Income as per Scheme Norms'], benefits: ['Monthly Scholarship', 'Renewal Facility', 'UG', 'PG', 'Diploma', 'Research Support'], documents: ['Aadhaar', 'Income Certificate', 'Marksheet', 'Admission Receipt', 'Bank Passbook'] },

{ id: 'edu2', title: 'Kanyashree Prakalpa (K1 & K2)', category: 'Education', state: 'West Bengal', level: 'State', subsidy: '₹1,000/year + ₹25,000 One-time', overview: 'Financial assistance to encourage girls to continue education and prevent child marriage.', applyLink: 'https://wbkanyashree.gov.in', tags: ['Girls', 'Scholarship'], eligibility: ['Girl Student', 'Age as per Scheme', 'Studying in Recognized Institution'], benefits: ['Annual Scholarship', 'One-time Grant'], documents: ['Birth Certificate', 'Aadhaar', 'School Certificate', 'Bank Account'] },

{ id: 'edu3', title: 'Kanyashree K3 Scholarship', category: 'Education', state: 'West Bengal', level: 'State', subsidy: '₹2,500/month', overview: 'Postgraduate scholarship for eligible Kanyashree beneficiaries.', applyLink: 'https://wbkanyashree.gov.in', tags: ['Girls', 'Postgraduate'], eligibility: ['Existing Kanyashree Beneficiary', 'PG Admission'], benefits: ['Monthly Scholarship'], documents: ['Admission Proof', 'Kanyashree ID', 'Aadhaar', 'Bank Account'] },

{ id: 'edu4', title: 'Aikyashree Scholarship', category: 'Education', state: 'West Bengal', level: 'State', subsidy: 'Varies by Course', overview: 'Scholarship for eligible minority community students from school to postgraduate level.', applyLink: 'https://wbmdfcscholarship.in', tags: ['Minority', 'Scholarship'], eligibility: ['Minority Community', 'Income Criteria'], benefits: ['Maintenance Allowance', 'Tuition Fee'], documents: ['Income Certificate', 'Community Certificate', 'Aadhaar', 'Marksheet'] },

{ id: 'edu5', title: 'Nabanna Scholarship', category: 'Education', state: 'West Bengal', level: 'State', subsidy: 'One-time Financial Assistance', overview: 'Financial assistance provided through the Chief Minister Relief Fund to deserving students.', applyLink: 'https://cmrf.wb.gov.in', tags: ['Scholarship', 'Financial Assistance'], eligibility: ['Meritorious Student', 'Financial Need'], benefits: ['One-time Grant'], documents: ['Marksheet', 'Income Certificate', 'Recommendation Letter', 'Aadhaar'] },

{ id: 'edu6', title: 'West Bengal Student Credit Card Scheme', category: 'Education', state: 'West Bengal', level: 'State', subsidy: 'Education Loan up to ₹10 Lakh', overview: 'Education loan for higher education in India and abroad.', applyLink: 'https://wbscc.wb.gov.in', tags: ['Education Loan', 'Higher Education'], eligibility: ['West Bengal Resident', 'Recognized Institution'], benefits: ['Education Loan', 'Affordable Interest Rate'], documents: ['Aadhaar', 'Admission Letter', 'Income Certificate', 'Photograph'] },

{ id: 'edu7', title: 'West Bengal Freeship Scheme (WBFS)', category: 'Education', state: 'West Bengal', level: 'State', subsidy: 'Tuition Fee Waiver', overview: 'Tuition fee support for eligible students studying in approved private technical institutions.', applyLink: 'https://wbfs.wb.gov.in', tags: ['Fee Waiver', 'Technical Education'], eligibility: ['Eligible Technical Student', 'Income Criteria'], benefits: ['Tuition Fee Waiver'], documents: ['Income Certificate', 'Admission Receipt', 'Aadhaar'] },

{ id: 'edu8', title: 'Medhashree Scheme', category: 'Education', state: 'West Bengal', level: 'State', subsidy: 'Annual Financial Assistance', overview: 'Educational assistance for eligible school students.', applyLink: 'https://www.wb.gov.in', tags: ['School', 'Scholarship'], eligibility: ['Eligible Student'], benefits: ['Annual Scholarship'], documents: ['School Certificate', 'Aadhaar'] },

{ id: 'edu9', title: 'Shikshashree Scheme', category: 'Education', state: 'West Bengal', level: 'State', subsidy: 'Annual Financial Assistance', overview: 'Educational assistance for eligible Scheduled Caste students.', applyLink: 'https://www.wb.gov.in', tags: ['SC', 'School'], eligibility: ['Scheduled Caste Student'], benefits: ['Educational Grant'], documents: ['SC Certificate', 'School Certificate'] },

{ id: 'edu10', title: 'Talent Support Programme', category: 'Education', state: 'West Bengal', level: 'State', subsidy: 'Varies', overview: 'Financial support for minority students continuing school and higher education.', applyLink: 'https://wbmdfcscholarship.in', tags: ['Minority', 'Scholarship'], eligibility: ['Minority Student', 'Income Criteria'], benefits: ['Financial Assistance'], documents: ['Income Certificate', 'Marksheet', 'Community Certificate'] },

{ id: 'edu11', title: 'Urdu Book Grant Scheme', category: 'Education', state: 'West Bengal', level: 'State', subsidy: 'Book Grant', overview: 'Financial assistance for purchasing Urdu textbooks by eligible students.', applyLink: 'https://wbmdfcscholarship.in', tags: ['Urdu', 'Book Grant'], eligibility: ['Eligible Urdu Student'], benefits: ['Book Purchase Assistance'], documents: ['School Certificate', 'Community Certificate'] },

{ id: 'edu12', title: 'OASIS Pre-Matric Scholarship (SC)', category: 'Education', state: 'West Bengal', level: 'State', subsidy: 'Varies', overview: 'Pre-Matric scholarship for Scheduled Caste school students.', applyLink: 'https://oasis.gov.in', tags: ['SC', 'Pre-Matric'], eligibility: ['SC Student', 'Eligible Class'], benefits: ['Scholarship'], documents: ['SC Certificate', 'Income Certificate', 'School Certificate'] },

{ id: 'edu13', title: 'OASIS Pre-Matric Scholarship (ST)', category: 'Education', state: 'West Bengal', level: 'State', subsidy: 'Varies', overview: 'Pre-Matric scholarship for Scheduled Tribe school students.', applyLink: 'https://oasis.gov.in', tags: ['ST', 'Pre-Matric'], eligibility: ['ST Student', 'Eligible Class'], benefits: ['Scholarship'], documents: ['ST Certificate', 'Income Certificate', 'School Certificate'] },

{ id: 'edu14', title: 'OASIS Pre-Matric Scholarship (OBC)', category: 'Education', state: 'West Bengal', level: 'State', subsidy: 'Varies', overview: 'Pre-Matric scholarship for Other Backward Classes students.', applyLink: 'https://oasis.gov.in', tags: ['OBC', 'Pre-Matric'], eligibility: ['OBC Student', 'Eligible Class'], benefits: ['Scholarship'], documents: ['OBC Certificate', 'Income Certificate', 'School Certificate'] },

{ id: 'edu15', title: 'OASIS Post-Matric Scholarship (SC/ST)', category: 'Education', state: 'West Bengal', level: 'State', subsidy: 'Varies', overview: 'Post-Matric scholarship for Scheduled Caste and Scheduled Tribe students.', applyLink: 'https://oasis.gov.in', tags: ['SC', 'ST', 'Post-Matric'], eligibility: ['SC/ST Student', 'Post-Matric Course'], benefits: ['Maintenance Allowance', 'Course Fee'], documents: ['SC/ST Certificate', 'Income Certificate', 'Admission Proof'] },

{ id: 'edu16', title: 'OASIS Post-Matric Scholarship (OBC)', category: 'Education', state: 'West Bengal', level: 'State', subsidy: 'Varies', overview: 'Post-Matric scholarship for Other Backward Classes students.', applyLink: 'https://oasis.gov.in', tags: ['OBC', 'Post-Matric'], eligibility: ['OBC Student', 'Post-Matric Course'], benefits: ['Maintenance Allowance', 'Course Fee'], documents: ['OBC Certificate', 'Income Certificate', 'Admission Proof'] },
    ],
    agriculture: [
        { id: 'agri1', title: 'Sprinkler / Drip Irrigation', category: 'Agriculture', state: 'West Bengal', level: 'State', subsidy: '50% Subsidy', overview: 'Financial aid for modern irrigation systems.', applyLink: 'https://www.wb.gov.in/irrigation', tags: ['Irrigation', 'Farmer'], eligibility: ['Farmer with land', 'Kisan Card'], benefits: ['50% subsidy', 'Technical support'], documents: ['Land papers', 'Aadhaar', 'Kisan Card'] },
        { id: 'agri2', title: 'Amar Fasal Amar Gola', category: 'Agriculture', state: 'West Bengal', level: 'State', subsidy: '₹5,000–25,000', overview: 'Storage and vending support for marginal farmers.', applyLink: 'https://www.wb.gov.in/afag', tags: ['Storage', 'Farmer'], eligibility: ['Marginal farmer', 'Kisan Card'], benefits: ['Warehouse support', 'Vending cart'], documents: ['Land records', 'Aadhaar', 'Kisan Card'] },
        { id: 'agri3', title: 'PM Kisan Samman Nidhi', category: 'Agriculture', state: 'All India', level: 'Central', subsidy: '₹6,000/year', overview: 'Income support for small and marginal farmers.', applyLink: 'https://pmkisan.gov.in', tags: ['Income', 'Farmer'], eligibility: ['Small farmer', 'Cultivable land'], benefits: ['₹6,000/year', '3 instalments'], documents: ['Aadhaar', 'Land papers', 'Bank account'] }
    ],
    health: [
{ id: 'health2', title: 'Ayushman Bharat PM-JAY', category: 'Healthcare', state: 'India', level: 'Central', type: 'Scheme', subsidy: 'Up to ₹5 Lakh Cashless Coverage', overview: 'National health insurance scheme for eligible families.', applyLink: 'https://beneficiary.nha.gov.in', tags: ['Insurance', 'PM-JAY'], eligibility: ['Eligible Beneficiaries'], benefits: ['Cashless Treatment'], documents: ['Ayushman Card', 'Aadhaar'] },

{ id: 'health3', title: 'West Bengal Health Scheme (WBHS)', category: 'Healthcare', state: 'West Bengal', level: 'State', type: 'Scheme', subsidy: 'Medical Reimbursement', overview: 'Healthcare benefits for state government employees and pensioners.', applyLink: 'https://healthscheme.wb.gov.in', tags: ['Government Employee'], eligibility: ['Government Employee', 'Pensioner'], benefits: ['Cashless Treatment', 'Medical Reimbursement'], documents: ['Employee ID', 'PPO'] },

{ id: 'health4', title: 'Nirmal Bangla', category: 'Healthcare', state: 'West Bengal', level: 'State', type: 'Scheme', subsidy: 'Sanitation Assistance', overview: 'Improves sanitation and public health through rural sanitation initiatives.', applyLink: 'https://www.wb.gov.in', tags: ['Sanitation', 'Public Health'], eligibility: ['Eligible Households'], benefits: ['Improved Sanitation'], documents: ['Identity Proof'] },

{ id: 'health5', title: 'Online OPD Ticket Booking', category: 'Healthcare', state: 'West Bengal', level: 'State', type: 'Service', subsidy: 'Free', overview: 'Book OPD tickets online for participating government hospitals.', applyLink: 'https://eswasthyawb.in', tags: ['OPD', 'Hospital'], eligibility: ['General Public'], benefits: ['Online Booking', 'Reduced Waiting Time'], documents: ['Mobile Number'] },

{ id: 'health6', title: 'Doctor Appointment Booking', category: 'Healthcare', state: 'West Bengal', level: 'State', type: 'Service', subsidy: 'Free', overview: 'Book appointments with doctors at participating government hospitals.', applyLink: 'https://eswasthyawb.in', tags: ['Doctor', 'Appointment'], eligibility: ['General Public'], benefits: ['Online Appointment'], documents: ['Mobile Number'] },

{ id: 'health7', title: 'Hospital Finder', category: 'Healthcare', state: 'West Bengal', level: 'State', type: 'Service', subsidy: 'Free', overview: 'Locate government hospitals and healthcare facilities across West Bengal.', applyLink: 'https://www.wbhealth.gov.in', tags: ['Hospital', 'Locator'], eligibility: ['Everyone'], benefits: ['Nearest Hospital Search'], documents: [] },

{ id: 'health8', title: 'Hospital Bed Availability', category: 'Healthcare', state: 'West Bengal', level: 'State', type: 'Service', subsidy: 'Free', overview: 'Check the availability of beds in government hospitals.', applyLink: 'https://eswasthyawb.in', tags: ['Hospital', 'Beds'], eligibility: ['Everyone'], benefits: ['Real-time Bed Status'], documents: [] },

{ id: 'health9', title: 'Blood Bank Search', category: 'Healthcare', state: 'West Bengal', level: 'State', type: 'Service', subsidy: 'Free', overview: 'Search government blood banks and blood availability.', applyLink: 'https://eraktkosh.in', tags: ['Blood Bank'], eligibility: ['Everyone'], benefits: ['Blood Availability Search'], documents: [] },

{ id: 'health10', title: 'Emergency Ambulance Service', category: 'Healthcare', state: 'West Bengal', level: 'State', type: 'Emergency Service', subsidy: 'Free/As Applicable', overview: 'Emergency ambulance service for medical emergencies.', applyLink: 'https://www.wbhealth.gov.in', tags: ['Ambulance', 'Emergency'], eligibility: ['Everyone'], benefits: ['Emergency Transport'], documents: [] },

{ id: 'health11', title: 'Free Medicines Scheme', category: 'Healthcare', state: 'West Bengal', level: 'State', type: 'Service', subsidy: 'Free Medicines', overview: 'Free medicines provided through government hospitals.', applyLink: 'https://www.wbhealth.gov.in', tags: ['Medicine'], eligibility: ['Government Hospital Patients'], benefits: ['Free Medicines'], documents: ['Prescription'] },

{ id: 'health12', title: 'Fair Price Medicine Shops', category: 'Healthcare', state: 'West Bengal', level: 'State', type: 'Service', subsidy: 'Discounted Medicines', overview: 'Affordable medicines through Fair Price Medicine Shops.', applyLink: 'https://www.wbhealth.gov.in', tags: ['Medicine'], eligibility: ['Everyone'], benefits: ['Affordable Medicines'], documents: ['Prescription'] },

{ id: 'health13', title: 'Free Diagnostic Services', category: 'Healthcare', state: 'West Bengal', level: 'State', type: 'Service', subsidy: 'Free Tests', overview: 'Free diagnostic tests at selected government hospitals.', applyLink: 'https://www.wbhealth.gov.in', tags: ['Diagnostic'], eligibility: ['Government Hospital Patients'], benefits: ['Free Lab Tests'], documents: ['Doctor Prescription'] },

{ id: 'health14', title: 'Health Card Services', category: 'Healthcare', state: 'West Bengal', level: 'State', type: 'Service', subsidy: 'Free', overview: 'Access and manage eligible government health cards and related services.', applyLink: 'https://swasthyasathi.gov.in', tags: ['Health Card'], eligibility: ['Eligible Beneficiaries'], benefits: ['Card Services'], documents: ['Identity Proof'] },

{ id: 'health15', title: 'Vaccination Information', category: 'Healthcare', state: 'West Bengal', level: 'State', type: 'Information', subsidy: 'Free', overview: 'Official information on immunization and vaccination programmes.', applyLink: 'https://www.wbhealth.gov.in', tags: ['Vaccination'], eligibility: ['Everyone'], benefits: ['Vaccination Schedule'], documents: [] },

{ id: 'health16', title: 'Emergency Contacts', category: 'Healthcare', state: 'West Bengal', level: 'State', type: 'Emergency', subsidy: 'Free', overview: 'Emergency health helpline numbers and medical support contacts.', applyLink: 'https://www.wbhealth.gov.in', tags: ['Emergency'], eligibility: ['Everyone'], benefits: ['Emergency Assistance'], documents: [] },

{ id: 'health17', title: 'Thalassemia Control Programme', category: 'Healthcare', state: 'West Bengal', level: 'State', type: 'Programme', subsidy: 'Free Screening & Support', overview: 'Programme for thalassemia screening, awareness and patient support.', applyLink: 'https://www.wbhealth.gov.in', tags: ['Thalassemia'], eligibility: ['Eligible Citizens'], benefits: ['Screening', 'Counselling'], documents: ['Identity Proof'] },

{ id: 'health18', title: 'Mission Niramaya', category: 'Healthcare', state: 'West Bengal', level: 'State', type: 'Programme', subsidy: 'Healthcare Support', overview: 'State initiative focused on improving public healthcare services.', applyLink: 'https://www.wbhealth.gov.in', tags: ['Public Health'], eligibility: ['Eligible Citizens'], benefits: ['Healthcare Support'], documents: [] },

{ id: 'health19', title: 'Health Facility Locator', category: 'Healthcare', state: 'West Bengal', level: 'State', type: 'Service', subsidy: 'Free', overview: 'Find nearby government health centres, PHCs, CHCs and hospitals.', applyLink: 'https://www.wbhealth.gov.in', tags: ['Hospital', 'PHC'], eligibility: ['Everyone'], benefits: ['Facility Search'], documents: [] },

{ id: 'health20', title: 'e-RaktKosh Blood Availability', category: 'Healthcare', state: 'India', level: 'Central', type: 'Service', subsidy: 'Free', overview: 'National portal to search blood availability and registered blood banks.', applyLink: 'https://eraktkosh.mohfw.gov.in', tags: ['Blood', 'e-RaktKosh'], eligibility: ['Everyone'], benefits: ['Blood Availability Search'], documents: [] },
    ],
    housing: [
{ id: 'house19', title: 'Pradhan Mantri Awaas Yojana (PMAY)', category: 'Housing', state: 'India', level: 'Central', subsidy: 'Housing Assistance', overview: 'Central Government housing scheme for eligible urban and rural households.', applyLink: 'https://pmaymis.gov.in', tags: ['PMAY', 'Housing'], eligibility: ['Eligible Households'], benefits: ['Financial Assistance for House Construction'], documents: ['Aadhaar', 'Income Certificate', 'Land Documents'] },
{ id: 'house1', title: 'Nijashree Housing Scheme', category: 'Housing', state: 'West Bengal', level: 'State', subsidy: 'Affordable Housing', overview: 'Provides affordable residential flats to Low and Middle Income Group families.', applyLink: 'https://housing.wb.gov.in', tags: ['Housing', 'LIG', 'MIG'], eligibility: ['Eligible West Bengal Residents'], benefits: ['Affordable Flats', 'Government Housing'], documents: ['Aadhaar', 'Income Certificate', 'Address Proof'] },

{ id: 'house2', title: 'Akanksha Housing Scheme', category: 'Housing', state: 'West Bengal', level: 'State', subsidy: 'Government Residential Accommodation', overview: 'Residential housing scheme for eligible State Government employees.', applyLink: 'https://housing.wb.gov.in', tags: ['Government Employee', 'Housing'], eligibility: ['State Government Employees'], benefits: ['Government Accommodation'], documents: ['Employee ID', 'Service Certificate'] },

{ id: 'house3', title: 'Chaa Sundari Housing Scheme', category: 'Housing', state: 'West Bengal', level: 'State', subsidy: 'Housing Assistance', overview: 'Housing support for tea garden workers and their families.', applyLink: 'https://housing.wb.gov.in', tags: ['Tea Garden', 'Housing'], eligibility: ['Eligible Tea Garden Workers'], benefits: ['Housing Assistance'], documents: ['Identity Proof', 'Employment Certificate'] },

{ id: 'house4', title: 'Chaa Sundari Extension Scheme', category: 'Housing', state: 'West Bengal', level: 'State', subsidy: 'Housing Support', overview: 'Extension of housing benefits for eligible tea garden worker families.', applyLink: 'https://housing.wb.gov.in', tags: ['Tea Garden', 'Housing'], eligibility: ['Eligible Beneficiaries'], benefits: ['Housing Assistance'], documents: ['Identity Proof'] },

{ id: 'house5', title: 'Rental Housing Estate (RHE)', category: 'Housing', state: 'West Bengal', level: 'State', subsidy: 'Affordable Rental Housing', overview: 'Government rental housing for eligible applicants.', applyLink: 'https://housing.wb.gov.in', tags: ['Rental Housing'], eligibility: ['Eligible Applicants'], benefits: ['Affordable Rent'], documents: ['Identity Proof', 'Income Certificate'] },

{ id: 'house6', title: 'Night Shelter Scheme', category: 'Housing', state: 'West Bengal', level: 'State', subsidy: 'Free Shelter', overview: 'Temporary night shelter for homeless persons.', applyLink: 'https://housing.wb.gov.in', tags: ['Shelter'], eligibility: ['Homeless Persons'], benefits: ['Safe Night Shelter'], documents: [] },

{ id: 'house7', title: 'Karmanjali Housing Scheme', category: 'Housing', state: 'West Bengal', level: 'State', subsidy: 'Affordable Housing', overview: 'Housing support under State Housing Department projects.', applyLink: 'https://housing.wb.gov.in', tags: ['Housing'], eligibility: ['Eligible Applicants'], benefits: ['Housing Support'], documents: ['Identity Proof'] },

{ id: 'house8', title: 'West Bengal RERA Services', category: 'Housing', state: 'West Bengal', level: 'State', subsidy: 'Free Online Service', overview: 'Online services related to real estate project and agent registration.', applyLink: 'https://rera.wb.gov.in', tags: ['RERA', 'Real Estate'], eligibility: ['Citizens', 'Builders'], benefits: ['Project Information', 'Complaint Facility'], documents: [] },

{ id: 'house9', title: 'RCFA Housing Scheme', category: 'Housing', state: 'West Bengal', level: 'State', subsidy: 'Affordable Housing', overview: 'Housing assistance under Residential Complex Financial Assistance projects.', applyLink: 'https://housing.wb.gov.in', tags: ['Housing'], eligibility: ['Eligible Applicants'], benefits: ['Housing Support'], documents: ['Identity Proof'] },

{ id: 'house10', title: 'Online Housing Application', category: 'Housing', state: 'West Bengal', level: 'State', subsidy: 'Free Service', overview: 'Apply online for various State Housing Department schemes.', applyLink: 'https://housing.wb.gov.in', tags: ['Online Service'], eligibility: ['Eligible Citizens'], benefits: ['Online Application'], documents: ['As Required'] },

{ id: 'house11', title: 'Housing Beneficiary Status Check', category: 'Housing', state: 'West Bengal', level: 'State', subsidy: 'Free Service', overview: 'Track the application and beneficiary status of housing schemes.', applyLink: 'https://housing.wb.gov.in', tags: ['Status'], eligibility: ['Applicants'], benefits: ['Real-time Status'], documents: ['Application Number'] },

{ id: 'house12', title: 'Online Housing Allotment', category: 'Housing', state: 'West Bengal', level: 'State', subsidy: 'Free Service', overview: 'View housing allotment results through the online portal.', applyLink: 'https://housing.wb.gov.in', tags: ['Allotment'], eligibility: ['Applicants'], benefits: ['Online Allotment'], documents: ['Application Number'] },

{ id: 'house13', title: 'Housing Complaint & Grievance Portal', category: 'Housing', state: 'West Bengal', level: 'State', subsidy: 'Free Service', overview: 'Register complaints and grievances related to housing schemes.', applyLink: 'https://housing.wb.gov.in', tags: ['Complaint'], eligibility: ['Citizens'], benefits: ['Online Complaint'], documents: [] },

{ id: 'house14', title: 'Affordable Housing Project Information', category: 'Housing', state: 'West Bengal', level: 'State', subsidy: 'Information Service', overview: 'Provides details of affordable housing projects across West Bengal.', applyLink: 'https://housing.wb.gov.in', tags: ['Housing Projects'], eligibility: ['Everyone'], benefits: ['Project Information'], documents: [] },

{ id: 'house15', title: 'Housing Department Citizen Services', category: 'Housing', state: 'West Bengal', level: 'State', subsidy: 'Free Service', overview: 'Citizen-centric online services provided by the Housing Department.', applyLink: 'https://housing.wb.gov.in', tags: ['Citizen Service'], eligibility: ['Everyone'], benefits: ['Online Services'], documents: [] },

{ id: 'house16', title: 'Slum Rehabilitation & Development Services', category: 'Housing', state: 'West Bengal', level: 'State', subsidy: 'Housing Development Support', overview: 'Supports rehabilitation and development of notified slum areas.', applyLink: 'https://housing.wb.gov.in', tags: ['Slum Development'], eligibility: ['Eligible Residents'], benefits: ['Housing Improvement'], documents: ['Identity Proof'] },

{ id: 'house17', title: 'Government Housing Project Locator', category: 'Housing', state: 'West Bengal', level: 'State', subsidy: 'Free Service', overview: 'Locate government housing projects throughout West Bengal.', applyLink: 'https://housing.wb.gov.in', tags: ['Project Locator'], eligibility: ['Everyone'], benefits: ['Project Search'], documents: [] },

{ id: 'house18', title: 'Housing Loan Guidance Services', category: 'Housing', state: 'West Bengal', level: 'State', subsidy: 'Information Service', overview: 'Provides guidance regarding housing loans and government housing support.', applyLink: 'https://housing.wb.gov.in', tags: ['Housing Loan'], eligibility: ['Home Buyers'], benefits: ['Loan Guidance'], documents: [] },
    ],    
    financial: [
    ],
    employment: [
        { id: 'emp1', title: 'Employment Exchange', category: 'Employment', state: 'West Bengal', level: 'State', subsidy: 'Job Support', overview: 'Connects job seekers with employers.', applyLink: 'https://www.wb.gov.in/employment', tags: ['Job', 'Career'], eligibility: ['Unemployed youth', 'Qualified'], benefits: ['Job registration', 'Placement'], documents: ['Educational certs', 'Aadhaar'] }
    ],
    skill: [
        { id: 'skill1', title: 'PMKVY', category: 'Skill Development', state: 'All India', level: 'Central', subsidy: 'Free Training', overview: 'Skill training for youth.', applyLink: 'https://pmkvyofficial.org', tags: ['Training', 'Certification'], eligibility: ['15–45 years', '5th pass'], benefits: ['Free training', 'Placement'], documents: ['Aadhaar', 'Education cert'] }
    ],
    rural: [
        { id: 'rural1', title: 'MGNREGA', category: 'Rural Development', state: 'All India', level: 'Central', subsidy: '100 Days Work', overview: 'Guaranteed rural employment.', applyLink: 'https://nrega.nic.in', tags: ['Employment', 'Rural'], eligibility: ['Rural resident', 'Adult'], benefits: ['100 days work', 'Wage'], documents: ['Job card', 'Aadhaar'] }
    ],
    digital: [
        { id: 'digital1', title: 'Digital India', category: 'Digital India', state: 'All India', level: 'Central', subsidy: 'Free Services', overview: 'Digital empowerment for citizens.', applyLink: 'https://digitalindia.gov.in', tags: ['Technology', 'Aadhaar'], eligibility: ['All citizens', 'Aadhaar'], benefits: ['Digital identity', 'Online services'], documents: ['Aadhaar', 'Mobile'] }
    ],
    energy: [
        { id: 'energy1', title: 'Ujjwala Yojana', category: 'Energy', state: 'All India', level: 'Central', subsidy: 'Free LPG', overview: 'LPG for BPL women.', applyLink: 'https://www.pmujjwala.gov.in', tags: ['LPG', 'Women'], eligibility: ['BPL', '18+ woman'], benefits: ['Free connection', 'Subsidized cylinders'], documents: ['BPL card', 'Aadhaar'] }
    ],
    women: [
{ id: 'women1', title: 'Annapurna Yojana', category: 'Women Empowerment', state: 'West Bengal', level: 'State', subsidy: '₹1,000–₹1,200/month', overview: 'Monthly financial assistance for eligible women of West Bengal.', applyLink: 'https://socialsecurity.wb.gov.in', tags: ['Women', 'Financial Assistance'], eligibility: ['Eligible Women', 'West Bengal Resident'], benefits: ['Monthly Financial Assistance'], documents: ['Aadhaar', 'Bank Account', 'Application Form'] },

{ id: 'women2', title: 'Kanyashree Prakalpa', category: 'Women Empowerment', state: 'West Bengal', level: 'State', subsidy: '₹1,000/year + ₹25,000 One-time', overview: 'Financial assistance to encourage girls to continue education.', applyLink: 'https://wbkanyashree.gov.in', tags: ['Girls', 'Education'], eligibility: ['Eligible Girl Student'], benefits: ['Annual Scholarship', 'One-time Grant'], documents: ['Birth Certificate', 'Aadhaar', 'School Certificate'] },

{ id: 'women3', title: 'Kanyashree K3', category: 'Women Empowerment', state: 'West Bengal', level: 'State', subsidy: '₹2,500/month', overview: 'Postgraduate scholarship for Kanyashree beneficiaries.', applyLink: 'https://wbkanyashree.gov.in', tags: ['Girls', 'Postgraduate'], eligibility: ['Eligible PG Student'], benefits: ['Monthly Scholarship'], documents: ['Admission Proof', 'Aadhaar'] },

{ id: 'women4', title: 'Rupashree Prakalpa', category: 'Women Empowerment', state: 'West Bengal', level: 'State', subsidy: '₹25,000 One-time', overview: 'Financial assistance for marriage of eligible women.', applyLink: 'https://wb.gov.in', tags: ['Marriage Assistance'], eligibility: ['Eligible Adult Woman'], benefits: ['One-time Assistance'], documents: ['Age Proof', 'Income Certificate', 'Aadhaar'] },

{ id: 'women5', title: 'Anandadhara', category: 'Women Empowerment', state: 'West Bengal', level: 'State', subsidy: 'Financial & Livelihood Support', overview: 'Supports women Self Help Groups through livelihood programmes.', applyLink: 'https://anandadhara.wb.gov.in', tags: ['SHG', 'Livelihood'], eligibility: ['Women SHGs'], benefits: ['Training', 'Financial Linkage'], documents: ['SHG Registration', 'Identity Proof'] },

{ id: 'women6', title: 'Muktir Alo', category: 'Women Empowerment', state: 'West Bengal', level: 'State', subsidy: 'Rehabilitation Support', overview: 'Support and rehabilitation for women in distress.', applyLink: 'https://wcdsw.wb.gov.in', tags: ['Rehabilitation'], eligibility: ['Eligible Women'], benefits: ['Counselling', 'Rehabilitation'], documents: ['Identity Proof'] },

{ id: 'women7', title: 'Manabik', category: 'Women Empowerment', state: 'West Bengal', level: 'State', subsidy: 'Monthly Assistance', overview: 'Financial assistance for persons with disabilities including eligible women.', applyLink: 'https://socialsecurity.wb.gov.in', tags: ['Disability'], eligibility: ['Eligible Persons with Disabilities'], benefits: ['Monthly Assistance'], documents: ['Disability Certificate', 'Aadhaar'] },

{ id: 'women8', title: 'Widow Pension (Jai Bangla)', category: 'Women Empowerment', state: 'West Bengal', level: 'State', subsidy: 'Monthly Pension', overview: 'Monthly pension for eligible widows.', applyLink: 'https://socialsecurity.wb.gov.in', tags: ['Widow Pension'], eligibility: ['Eligible Widow'], benefits: ['Monthly Pension'], documents: ['Death Certificate', 'Aadhaar', 'Bank Account'] },

{ id: 'women9', title: 'Old Age Pension (Jai Bangla)', category: 'Women Empowerment', state: 'West Bengal', level: 'State', subsidy: 'Monthly Pension', overview: 'Social pension for eligible senior citizens including women.', applyLink: 'https://socialsecurity.wb.gov.in', tags: ['Senior Citizen'], eligibility: ['Eligible Senior Citizen'], benefits: ['Monthly Pension'], documents: ['Age Proof', 'Aadhaar'] },

{ id: 'women10', title: 'One Stop Centre (Sakhi)', category: 'Women Empowerment', state: 'West Bengal', level: 'State', subsidy: 'Free', overview: 'Integrated support for women affected by violence.', applyLink: 'https://wcdsw.wb.gov.in', tags: ['Safety', 'Support'], eligibility: ['Women in Need'], benefits: ['Legal Aid', 'Medical Support', 'Counselling'], documents: [] },

{ id: 'women11', title: 'Women Helpline 181', category: 'Women Empowerment', state: 'West Bengal', level: 'State', subsidy: 'Free', overview: '24×7 emergency assistance for women.', applyLink: 'https://wcdsw.wb.gov.in', tags: ['Helpline'], eligibility: ['All Women'], benefits: ['Emergency Support'], documents: [] },

{ id: 'women12', title: 'Domestic Violence Support Services', category: 'Women Empowerment', state: 'West Bengal', level: 'State', subsidy: 'Free', overview: 'Support services for women facing domestic violence.', applyLink: 'https://wcdsw.wb.gov.in', tags: ['Domestic Violence'], eligibility: ['Women in Need'], benefits: ['Counselling', 'Legal Assistance'], documents: [] },

{ id: 'women13', title: 'Protection Officer Services', category: 'Women Empowerment', state: 'West Bengal', level: 'State', subsidy: 'Free', overview: 'Protection Officers assist women under the Domestic Violence Act.', applyLink: 'https://wcdsw.wb.gov.in', tags: ['Legal'], eligibility: ['Women in Need'], benefits: ['Protection', 'Legal Guidance'], documents: [] },

{ id: 'women14', title: 'Legal Aid for Women', category: 'Women Empowerment', state: 'West Bengal', level: 'State', subsidy: 'Free', overview: 'Free legal assistance for eligible women.', applyLink: 'https://wbslsa.bangla.gov.in', tags: ['Legal Aid'], eligibility: ['Eligible Women'], benefits: ['Free Legal Services'], documents: ['Identity Proof'] },

{ id: 'women15', title: 'Ujjawala', category: 'Women Empowerment', state: 'West Bengal', level: 'State', subsidy: 'Free', overview: 'Support for prevention of trafficking and rehabilitation of victims.', applyLink: 'https://wcdsw.wb.gov.in', tags: ['Anti Trafficking'], eligibility: ['Eligible Women'], benefits: ['Rescue', 'Rehabilitation'], documents: [] },

{ id: 'women16', title: 'Swadhar Greh', category: 'Women Empowerment', state: 'West Bengal', level: 'State', subsidy: 'Free', overview: 'Shelter and rehabilitation for women in difficult circumstances.', applyLink: 'https://wcdsw.wb.gov.in', tags: ['Shelter'], eligibility: ['Eligible Women'], benefits: ['Shelter', 'Food', 'Counselling'], documents: [] },

{ id: 'women17', title: 'Working Women Hostel', category: 'Women Empowerment', state: 'West Bengal', level: 'State', subsidy: 'Subsidized Accommodation', overview: 'Safe accommodation for working women.', applyLink: 'https://wcdsw.wb.gov.in', tags: ['Hostel'], eligibility: ['Working Women'], benefits: ['Safe Hostel'], documents: ['Employment Proof'] },

{ id: 'women18', title: 'Women SHG Registration', category: 'Women Empowerment', state: 'West Bengal', level: 'State', subsidy: 'Government Support', overview: 'Registration support for Women Self Help Groups.', applyLink: 'https://anandadhara.wb.gov.in', tags: ['SHG'], eligibility: ['Women Group'], benefits: ['Official Registration'], documents: ['Group Details'] },

{ id: 'women19', title: 'SHG Bank Linkage Programme', category: 'Women Empowerment', state: 'West Bengal', level: 'State', subsidy: 'Bank Credit Support', overview: 'Facilitates bank linkage and credit support for SHGs.', applyLink: 'https://anandadhara.wb.gov.in', tags: ['SHG', 'Finance'], eligibility: ['Registered SHGs'], benefits: ['Credit Linkage'], documents: ['SHG Registration'] },

{ id: 'women20', title: 'Skill Development for Women', category: 'Women Empowerment', state: 'West Bengal', level: 'State', subsidy: 'Free Training', overview: 'Skill development and vocational training for women.', applyLink: 'https://pbssd.gov.in', tags: ['Skill Development'], eligibility: ['Eligible Women'], benefits: ['Training', 'Certification'], documents: ['Identity Proof'] },

{ id: 'women21', title: 'Women Entrepreneurship Support', category: 'Women Empowerment', state: 'West Bengal', level: 'State', subsidy: 'Business Support', overview: 'Support for women entrepreneurs through government programmes.', applyLink: 'https://www.wb.gov.in', tags: ['Entrepreneurship'], eligibility: ['Eligible Women Entrepreneurs'], benefits: ['Business Guidance', 'Financial Linkages'], documents: ['Identity Proof'] },

{ id: 'women22', title: 'Creche Services for Working Mothers', category: 'Women Empowerment', state: 'West Bengal', level: 'State', subsidy: 'Child Care Support', overview: 'Day-care support for children of working mothers.', applyLink: 'https://wcdsw.wb.gov.in', tags: ['Child Care'], eligibility: ['Working Mothers'], benefits: ['Creche Facility'], documents: ['Identity Proof'] },

{ id: 'women23', title: 'Women Counselling Centres', category: 'Women Empowerment', state: 'West Bengal', level: 'State', subsidy: 'Free', overview: 'Counselling and guidance services for women.', applyLink: 'https://wcdsw.wb.gov.in', tags: ['Counselling'], eligibility: ['Women in Need'], benefits: ['Counselling'], documents: [] },

{ id: 'women24', title: 'Family Counselling Centres', category: 'Women Empowerment', state: 'West Bengal', level: 'State', subsidy: 'Free', overview: 'Family counselling and dispute resolution support.', applyLink: 'https://wcdsw.wb.gov.in', tags: ['Family Support'], eligibility: ['Eligible Families'], benefits: ['Counselling'], documents: [] },

{ id: 'women25', title: 'Mission Shakti', category: 'Women Empowerment', state: 'India', level: 'Central', subsidy: 'Women Safety & Empowerment Support', overview: 'Umbrella programme for women safety, protection and empowerment implemented through states.', applyLink: 'https://wcd.gov.in', tags: ['Women Safety', 'Empowerment'], eligibility: ['As per Programme Guidelines'], benefits: ['Integrated Support Services'], documents: ['As Required'] },    ],
    legal: [
        { id: 'legal1', title: 'Legal Aid', category: 'Legal', state: 'West Bengal', level: 'State', subsidy: 'Free Services', overview: 'Free legal help for the needy.', applyLink: 'https://www.wb.gov.in/legal-aid', tags: ['Justice', 'Aid'], eligibility: ['EWS', 'Marginalized'], benefits: ['Free advice', 'Representation'], documents: ['Income proof', 'Case details'] }
    ],
    food: [
        { id: 'food1', title: 'Mid-Day Meal', category: 'Food & Nutrition', state: 'All India', level: 'Central', subsidy: 'Free Meals', overview: 'Nutritional meals for school children.', applyLink: 'https://mdm.gov.in', tags: ['Nutrition', 'School'], eligibility: ['Primary students'], benefits: ['Free meals', 'Better attendance'], documents: ['School ID', 'Aadhaar'] }
    ],
    transport: [
        { id: 'transport1', title: 'Public Transport Subsidy', category: 'Transportation', state: 'West Bengal', level: 'State', subsidy: 'Subsidized Fares', overview: 'Discounted travel for seniors/students.', applyLink: 'https://www.wb.gov.in/transport', tags: ['Travel', 'Subsidy'], eligibility: ['Senior/Student/Disabled'], benefits: ['Discount on fares'], documents: ['ID card', 'Aadhaar'] }
    ]
};

// ============================================
// CATEGORIES DISPLAY
// ============================================
const categories = [
    { icon: 'fa-graduation-cap', name: 'Education', count: '16 Schemes', color: '#6C3CE1', key: 'education' },
    { icon: 'fa-heart-pulse', name: 'Healthcare', count: '19 Schemes', color: '#FF6B6B', key: 'health' },
    { icon: 'fa-venus-mars', name: 'Women Empowerment', count: '19 Schemes', color: '#EC4899', key: 'women' },
    { icon: 'fa-building', name: 'Housing', count: '19 Schemes', color: '#F59E0B', key: 'housing' },
    { icon: 'fa-hand-holding-dollar', name: 'Financial', count: '1 Schemes', color: '#06D6A0', key: 'financial' },
    { icon: 'fa-briefcase', name: 'Employment', count: '1 Schemes', color: '#3B82F6', key: 'employment' },
    { icon: 'fa-tractor', name: 'Agriculture', count: '3 Schemes', color: '#10B981', key: 'agriculture' },
    { icon: 'fa-scale-balanced', name: 'Legal', count: '1 Schemes', color: '#8B5CF6', key: 'legal' },
    { icon: 'fa-utensils', name: 'Food & Nutrition', count: '1 Schemes', color: '#F472B6', key: 'food' },
    { icon: 'fa-people-arrows', name: 'Skill Development', count: '1 Schemes', color: '#6366F1', key: 'skill' },
    { icon: 'fa-truck', name: 'Transportation', count: '1 Schemes', color: '#14B8A6', key: 'transport' },
    { icon: 'fa-bolt', name: 'Energy', count: '1 Schemes', color: '#F59E0B', key: 'energy' },
    { icon: 'fa-wifi', name: 'Digital India', count: '1 Schemes', color: '#8B5CF6', key: 'digital' },
    { icon: 'fa-tree', name: 'Rural Development', count: '1 Schemes', color: '#10B981', key: 'rural' }
];

// ============================================
// RENDER CATEGORIES
// ============================================
const categoriesGrid = document.getElementById('categoriesGrid');

categories.forEach((cat, index) => {
    const card = document.createElement('div');
    card.className = 'category-card';
    card.style.animationDelay = `${index * 0.1}s`;
    card.innerHTML = `
        <div class="category-icon" style="background: ${cat.color}20; color: ${cat.color}">
            <i class="fas ${cat.icon}"></i>
        </div>
        <h3>${cat.name}</h3>
        <p>${cat.count}</p>
        <div class="category-hover-line" style="background: ${cat.color}"></div>
    `;
    
    card.addEventListener('click', function() {
        showSchemesByCategory(cat.key, cat.name);
    });
    
    categoriesGrid.appendChild(card);
});

// ============================================
// SHOW SCHEMES BY CATEGORY
// ============================================
function showSchemesByCategory(key, name) {
    const schemes = allSchemesData[key] || [];
    
    if (schemes.length === 0) {
        alert(`No schemes found for "${name}". Please try another category.`);
        return;
    }
    
    document.querySelector('.categories').style.display = 'none';
    const displaySection = document.getElementById('educationSchemes');
    displaySection.style.display = 'block';
    displaySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    const header = displaySection.querySelector('.section-header');
    header.querySelector('.section-tag').textContent = `${name} Schemes`;
    header.querySelector('h2').innerHTML = `West Bengal <span class="gradient-text">${name} Schemes</span>`;
    header.querySelector('p').textContent = `${schemes.length} schemes available`;
    
    const grid = document.getElementById('educationSchemesGrid');
    grid.innerHTML = schemes.map((scheme, index) => `
        <div class="scheme-card-item" onclick="showSchemeDetail('${scheme.id}', '${key}')" style="animation-delay: ${index * 0.1}s">
            <div class="scheme-card-icon" style="background: ${getCategoryColor(key)}20; color: ${getCategoryColor(key)}">
                <i class="fas fa-file-alt"></i>
            </div>
            <div class="scheme-card-content">
                <h3>${scheme.title}</h3>
                <div class="scheme-card-meta">
                    <span class="scheme-category">${scheme.category}</span>
                    <span class="scheme-amount">${scheme.subsidy}</span>
                </div>
                <p>${scheme.overview}</p>
                <div class="scheme-card-footer">
                    <span class="scheme-eligibility">👤 ${scheme.eligibility.join(', ')}</span>
                    <button class="view-detail-btn" onclick="event.stopPropagation(); showSchemeDetail('${scheme.id}', '${key}')">
                        View Details →
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    document.getElementById('schemeDetailView').style.display = 'none';
}

// ============================================
// GET CATEGORY COLOR
// ============================================
function getCategoryColor(key) {
    const colors = {
        education: '#6C3CE1', agriculture: '#10B981', health: '#FF6B6B',
        housing: '#F59E0B', financial: '#06D6A0', employment: '#3B82F6',
        skill: '#6366F1', rural: '#14B8A6', digital: '#8B5CF6',
        energy: '#F59E0B', women: '#EC4899', legal: '#8B5CF6',
        food: '#F472B6', transport: '#14B8A6'
    };
    return colors[key] || '#6C3CE1';
}

// ============================================
// SHOW SCHEME DETAIL
// ============================================
function showSchemeDetail(id, categoryKey) {
    const schemes = allSchemesData[categoryKey] || [];
    const scheme = schemes.find(s => s.id === id);
    if (!scheme) return;
    
    const grid = document.getElementById('educationSchemesGrid');
    const detailView = document.getElementById('schemeDetailView');
    
    grid.style.display = 'none';
    detailView.style.display = 'block';
    detailView.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    detailView.innerHTML = `
        <div class="scheme-detail-card">
            <button class="close-detail-btn" onclick="closeSchemeDetail()">
                <i class="fas fa-times"></i>
            </button>
            <div class="scheme-detail-header">
                <div class="scheme-detail-icon" style="background: ${getCategoryColor(categoryKey)}20; color: ${getCategoryColor(categoryKey)}">
                    <i class="fas fa-file-alt"></i>
                </div>
                <div>
                    <span class="scheme-detail-badge" style="background: ${getCategoryColor(categoryKey)}20; color: ${getCategoryColor(categoryKey)}">
                        ${scheme.level}
                    </span>
                    <h2>${scheme.title}</h2>
                    <div class="scheme-detail-meta">
                        <span>📂 ${scheme.category}</span>
                        <span>💰 ${scheme.subsidy}</span>
                        <span>📍 ${scheme.state}</span>
                    </div>
                </div>
            </div>
            <div class="scheme-detail-body">
                <div class="scheme-detail-section"><h4>📋 Description</h4><p>${scheme.overview}</p></div>
                <div class="scheme-detail-section"><h4>✅ Eligibility</h4><ul>${scheme.eligibility.map(e => `<li>${e}</li>`).join('')}</ul></div>
                <div class="scheme-detail-section"><h4>🎯 Benefits</h4><ul>${scheme.benefits.map(b => `<li>${b}</li>`).join('')}</ul></div>
                <div class="scheme-detail-section"><h4>📄 Documents</h4><ul>${scheme.documents.map(d => `<li>${d}</li>`).join('')}</ul></div>
                <div class="scheme-detail-actions">
                    <a href="${scheme.applyLink}" target="_blank" class="apply-now-btn"><i class="fas fa-external-link-alt"></i> Apply Now</a>
                    <button class="save-scheme-btn" onclick="saveScheme('${scheme.id}')"><i class="fas fa-bookmark"></i> Save</button>
                    <button class="share-scheme-btn" onclick="shareScheme('${scheme.id}')"><i class="fas fa-share-alt"></i> Share</button>
                </div>
            </div>
        </div>
    `;
}

// ============================================
// CLOSE DETAIL
// ============================================
function closeSchemeDetail() {
    document.getElementById('educationSchemesGrid').style.display = 'grid';
    document.getElementById('schemeDetailView').style.display = 'none';
}

// ============================================
// BACK TO CATEGORIES
// ============================================
function showCategories() {
    document.querySelector('.categories').style.display = 'block';
    document.getElementById('educationSchemes').style.display = 'none';
    document.getElementById('schemeDetailView').style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// SAVE & SHARE
// ============================================
function saveScheme(id) {
    const saved = JSON.parse(localStorage.getItem('savedSchemes') || '[]');
    if (!saved.includes(id)) {
        saved.push(id);
        localStorage.setItem('savedSchemes', JSON.stringify(saved));
        alert('✅ Scheme saved successfully!');
    } else {
        alert('⚠️ Scheme already saved.');
    }
}

function shareScheme(id) {
    const url = window.location.href;
    if (navigator.share) {
        navigator.share({ title: 'WBseva AI Scheme', url: url }).catch(() => {});
    } else {
        navigator.clipboard.writeText(url).then(() => alert('✅ Link copied!'));
    }
}

// ============================================
// NAVBAR SCROLL
// ============================================
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ============================================
// MOBILE NAV TOGGLE
// ============================================
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = navToggle.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        }
    });
}

// ============================================
// THEME SWITCHER
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const themeBtn = document.getElementById('themeToggleBtn');
    const themeDropdown = document.getElementById('themeDropdown');
    const themeOptions = document.querySelectorAll('.theme-dropdown li');
    
    if (themeBtn) {
        themeBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            this.classList.toggle('active');
            themeDropdown.classList.toggle('active');
        });
    }
    
    function applyTheme(theme) {
        const root = document.documentElement;
        root.classList.remove('theme-blue', 'theme-green', 'theme-purple', 'theme-orange', 'theme-pink', 'theme-red', 'theme-teal');
        if (theme !== 'default') root.classList.add(`theme-${theme}`);
        themeOptions.forEach(opt => {
            opt.classList.remove('active');
            if (opt.dataset.theme === theme) opt.classList.add('active');
        });
        localStorage.setItem('wbseva-theme', theme);
    }
    
    const savedTheme = localStorage.getItem('wbseva-theme') || 'default';
    applyTheme(savedTheme);
    
    themeOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.stopPropagation();
            applyTheme(this.dataset.theme);
            themeDropdown.classList.remove('active');
            themeBtn.classList.remove('active');
        });
    });
    
    document.addEventListener('click', function(e) {
        if (!themeDropdown?.contains(e.target) && !themeBtn?.contains(e.target)) {
            themeDropdown?.classList.remove('active');
            themeBtn?.classList.remove('active');
        }
    });
});

// ============================================
// STATISTICS COUNTER
// ============================================
const statsCounters = document.querySelectorAll('.stat-number-large');
const animateStatsCounter = (counter) => {
    const target = parseFloat(counter.dataset.count);
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    let current = 0;
    const updateCounter = () => {
        current += target / steps;
        if (current >= target) {
            counter.textContent = Math.floor(target) + '+';
            return;
        }
        counter.textContent = Math.floor(current) + '+';
        setTimeout(updateCounter, stepTime);
    };
    updateCounter();
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStatsCounter(entry.target);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });
statsCounters.forEach(counter => statsObserver.observe(counter));

// ============================================
// SEARCH FUNCTIONALITY
// ============================================
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const searchResults = document.getElementById('searchResults');
const searchResultsList = document.getElementById('searchResultsList');
const searchResultsClose = document.getElementById('searchResultsClose');

if (searchInput && searchBtn) {
    const performSearch = () => {
        const query = searchInput.value.trim().toLowerCase();
        if (!query) {
            searchResults.style.display = 'none';
            return;
        }
        
        let results = [];
        for (let key in allSchemesData) {
            allSchemesData[key].forEach(scheme => {
                if (scheme.title.toLowerCase().includes(query) || 
                    scheme.category.toLowerCase().includes(query) ||
                    scheme.tags.some(t => t.toLowerCase().includes(query))) {
                    results.push(scheme);
                }
            });
        }
        
        searchResults.style.display = 'block';
        searchResultsList.innerHTML = results.length === 0 ? 
            `<div class="search-no-results">No schemes found for "${searchInput.value}"</div>` :
            results.map(scheme => `
                <div class="search-result-item">
                    <span class="result-title">${scheme.title}</span>
                    <div style="display:flex;align-items:center;gap:10px;">
                        <span class="result-badge">${scheme.category}</span>
                        <a href="${scheme.applyLink}" target="_blank" class="result-link">View <i class="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
            `).join('');
    };
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') searchResults.style.display = 'none';
    });
}

if (searchResultsClose) {
    searchResultsClose.addEventListener('click', () => {
        searchResults.style.display = 'none';
    });
}

document.addEventListener('click', (e) => {
    if (searchResults && !searchResults.contains(e.target) && 
        e.target !== searchInput && e.target !== searchBtn) {
        searchResults.style.display = 'none';
    }
});

// ============================================
// FAQ TOGGLE
// ============================================
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        const isActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(other => {
            if (other !== item) other.classList.remove('active');
        });
        item.classList.toggle('active');
    });
});

// ============================================
// PARALLAX EFFECT
// ============================================
document.addEventListener('mousemove', (e) => {
    const orbs = document.querySelectorAll('.orb');
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    orbs.forEach((orb, i) => {
        const speed = 1 + i * 0.3;
        orb.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
});

// ============================================
// SCROLL TOP BUTTON
// ============================================
const scrollTopBtn = document.createElement('button');
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============================================
// CATEGORY CARD ANIMATION
// ============================================
const categoryCards = document.querySelectorAll('.category-card');
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            cardObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

categoryCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    cardObserver.observe(card);
});

// ============================================
// ACTIVE NAV LINK
// ============================================
const sections = document.querySelectorAll('section[id]');
const navLinkItems = document.querySelectorAll('.nav-links a');

if (sections.length > 0 && navLinkItems.length > 0) {
    const highlightNav = () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        navLinkItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', highlightNav);
}

// ============================================
// DYNAMIC YEAR
// ============================================
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
    const year = new Date().getFullYear();
    footerYear.innerHTML = footerYear.innerHTML.replace('2026', year);
}

console.log('✅ WBseva AI loaded successfully!');
console.log('📚 All 14 categories working!');