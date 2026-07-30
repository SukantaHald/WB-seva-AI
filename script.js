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
{ id: 'agri1', title: 'Krishak Bandhu', category: 'Agriculture', state: 'West Bengal', level: 'State', subsidy: 'Financial Assistance & Life Insurance', overview: 'Provides financial assistance and life insurance support to farmers.', applyLink: 'https://krishakbandhu.net', tags: ['Farmers', 'Financial Assistance'], eligibility: ['Eligible Farmers', 'Land Owners'], benefits: ['Financial Assistance', 'Life Insurance'], documents: ['Aadhaar', 'Land Records', 'Bank Account'] },

{ id: 'agri2', title: 'Bangla Shasya Bima', category: 'Agriculture', state: 'West Bengal', level: 'State', subsidy: 'Crop Insurance', overview: 'Crop insurance scheme protecting farmers against crop loss.', applyLink: 'https://banglashasyabima.net', tags: ['Crop Insurance'], eligibility: ['Eligible Farmers'], benefits: ['Crop Loss Compensation'], documents: ['Aadhaar', 'Land Record'] },

{ id: 'agri3', title: 'Mati Sathi', category: 'Agriculture', state: 'West Bengal', level: 'State', subsidy: 'Free Soil Testing', overview: 'Provides soil health testing and advisory services to farmers.', applyLink: 'https://matisathi.net', tags: ['Soil Health'], eligibility: ['Farmers'], benefits: ['Soil Health Report'], documents: ['Aadhaar'] },

{ id: 'agri4', title: 'Agricultural Farm Mechanization Scheme', category: 'Agriculture', state: 'West Bengal', level: 'State', subsidy: 'Subsidy on Farm Machinery', overview: 'Financial assistance for purchasing agricultural machinery.', applyLink: 'https://matirkatha.net', tags: ['Farm Equipment'], eligibility: ['Eligible Farmers'], benefits: ['Machinery Subsidy'], documents: ['Aadhaar', 'Land Record'] },

{ id: 'agri5', title: 'Seed Distribution Programme', category: 'Agriculture', state: 'West Bengal', level: 'State', subsidy: 'Subsidized Seeds', overview: 'Distribution of certified seeds to farmers at subsidized rates.', applyLink: 'https://matirkatha.net', tags: ['Seeds'], eligibility: ['Registered Farmers'], benefits: ['Quality Seeds'], documents: ['Farmer Registration'] },

{ id: 'agri6', title: 'Soil Health Card Services', category: 'Agriculture', state: 'West Bengal', level: 'State', subsidy: 'Free Service', overview: 'Provides Soil Health Cards based on scientific soil testing.', applyLink: 'https://matisathi.net', tags: ['Soil'], eligibility: ['Farmers'], benefits: ['Soil Health Card'], documents: ['Aadhaar'] },

{ id: 'agri7', title: 'Farmer Registration Services', category: 'Agriculture', state: 'West Bengal', level: 'State', subsidy: 'Free Registration', overview: 'Online registration for farmers to access government agricultural schemes.', applyLink: 'https://matirkatha.net', tags: ['Registration'], eligibility: ['Farmers'], benefits: ['Scheme Eligibility'], documents: ['Aadhaar', 'Land Record'] },

{ id: 'agri8', title: 'Agricultural Equipment Hiring Centre', category: 'Agriculture', state: 'West Bengal', level: 'State', subsidy: 'Subsidized Equipment Rental', overview: 'Provides farm machinery through Custom Hiring Centres.', applyLink: 'https://matirkatha.net', tags: ['Farm Machinery'], eligibility: ['Farmers'], benefits: ['Affordable Equipment Rental'], documents: ['Farmer ID'] },

{ id: 'agri9', title: 'Fertilizer Distribution Services', category: 'Agriculture', state: 'West Bengal', level: 'State', subsidy: 'Subsidized Fertilizer', overview: 'Distribution of fertilizers through authorized government channels.', applyLink: 'https://matirkatha.net', tags: ['Fertilizer'], eligibility: ['Registered Farmers'], benefits: ['Subsidized Fertilizer'], documents: ['Farmer Registration'] },

{ id: 'agri10', title: 'Agricultural Irrigation Assistance', category: 'Agriculture', state: 'West Bengal', level: 'State', subsidy: 'Irrigation Support', overview: 'Financial assistance for minor irrigation and water conservation.', applyLink: 'https://matirkatha.net', tags: ['Irrigation'], eligibility: ['Eligible Farmers'], benefits: ['Irrigation Assistance'], documents: ['Land Record'] },

{ id: 'agri11', title: 'Organic Farming Promotion Scheme', category: 'Agriculture', state: 'West Bengal', level: 'State', subsidy: 'Organic Farming Support', overview: 'Promotes organic farming through training and incentives.', applyLink: 'https://matirkatha.net', tags: ['Organic Farming'], eligibility: ['Farmers'], benefits: ['Training', 'Financial Support'], documents: ['Farmer Registration'] },

{ id: 'agri12', title: 'Horticulture Development Programme', category: 'Agriculture', state: 'West Bengal', level: 'State', subsidy: 'Financial Assistance', overview: 'Supports cultivation of fruits, vegetables and flowers.', applyLink: 'https://matirkatha.net', tags: ['Horticulture'], eligibility: ['Eligible Farmers'], benefits: ['Financial Assistance'], documents: ['Land Record'] },

{ id: 'agri13', title: 'Agricultural Marketing Information Service', category: 'Agriculture', state: 'West Bengal', level: 'State', subsidy: 'Free Information Service', overview: 'Provides agricultural market prices and marketing information.', applyLink: 'https://matirkatha.net', tags: ['Market Prices'], eligibility: ['Farmers'], benefits: ['Market Information'], documents: [] },

{ id: 'agri14', title: 'Crop Advisory Services', category: 'Agriculture', state: 'West Bengal', level: 'State', subsidy: 'Free Advisory', overview: 'Provides expert crop management and cultivation advice.', applyLink: 'https://matirkatha.net', tags: ['Advisory'], eligibility: ['Farmers'], benefits: ['Expert Guidance'], documents: [] },

{ id: 'agri15', title: 'Agricultural Training Programme', category: 'Agriculture', state: 'West Bengal', level: 'State', subsidy: 'Free Training', overview: 'Training programmes on modern agricultural practices.', applyLink: 'https://matirkatha.net', tags: ['Training'], eligibility: ['Farmers'], benefits: ['Skill Development'], documents: ['Identity Proof'] },

{ id: 'agri16', title: 'e-Paddy Procurement', category: 'Agriculture', state: 'West Bengal', level: 'State', subsidy: 'MSP Procurement Service', overview: 'Online paddy procurement registration for eligible farmers.', applyLink: 'https://procurement.wbfood.in', tags: ['Paddy', 'MSP'], eligibility: ['Registered Farmers'], benefits: ['MSP Procurement'], documents: ['Farmer Registration', 'Bank Account'] },

{ id: 'agri17', title: 'Agricultural Subsidy Status Check', category: 'Agriculture', state: 'West Bengal', level: 'State', subsidy: 'Free Service', overview: 'Track the status of agriculture subsidy applications.', applyLink: 'https://matirkatha.net', tags: ['Status'], eligibility: ['Applicants'], benefits: ['Application Tracking'], documents: ['Application ID'] },

{ id: 'agri18', title: 'PM-KISAN', category: 'Agriculture', state: 'India', level: 'Central', subsidy: '₹6,000/year', overview: 'Income support scheme for eligible farmer families.', applyLink: 'https://pmkisan.gov.in', tags: ['Income Support'], eligibility: ['Eligible Farmers'], benefits: ['₹6,000 Annual Assistance'], documents: ['Aadhaar', 'Land Record', 'Bank Account'] },

{ id: 'agri19', title: 'Kisan Credit Card (KCC)', category: 'Agriculture', state: 'India', level: 'Central', subsidy: 'Crop Loan', overview: 'Provides timely and affordable agricultural credit to farmers.', applyLink: 'https://pmkisan.gov.in', tags: ['Credit', 'Loan'], eligibility: ['Eligible Farmers'], benefits: ['Low Interest Crop Loan'], documents: ['Aadhaar', 'Land Record', 'Bank Account'] },

{ id: 'agri20', title: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)', category: 'Agriculture', state: 'India', level: 'Central', subsidy: 'Crop Insurance', overview: 'Crop insurance scheme covering losses due to natural calamities.', applyLink: 'https://pmfby.gov.in', tags: ['Crop Insurance'], eligibility: ['Eligible Farmers'], benefits: ['Insurance Coverage'], documents: ['Aadhaar', 'Land Record', 'Bank Account'] },    ],
  
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
{ id: 'finance1', title: 'Annapurna Yojana', category: 'Financial', state: 'West Bengal', level: 'State', subsidy: 'Food Security Assistance', overview: 'Provides food assistance to eligible beneficiaries under the State welfare programme.', applyLink: 'https://food.wb.gov.in', tags: ['Food Security', 'Women'], eligibility: ['Eligible Beneficiaries'], benefits: ['Food Assistance'], documents: ['Aadhaar', 'Ration Card'] },

{ id: 'finance2', title: 'Bina Mulya Samajik Suraksha Yojana', category: 'Financial', state: 'West Bengal', level: 'State', subsidy: 'Free Social Security Benefits', overview: 'Social security scheme for unorganized workers without premium contribution.', applyLink: 'https://wblabour.gov.in', tags: ['Social Security', 'Workers'], eligibility: ['Registered Unorganized Workers'], benefits: ['Insurance', 'Pension', 'Financial Assistance'], documents: ['Aadhaar', 'Labour Registration'] },

{ id: 'finance3', title: 'Jai Johar Pension Scheme', category: 'Financial', state: 'West Bengal', level: 'State', subsidy: 'Monthly Pension', overview: 'Monthly pension for eligible Scheduled Tribe senior citizens.', applyLink: 'https://socialsecurity.wb.gov.in', tags: ['Pension', 'ST'], eligibility: ['Eligible ST Beneficiary'], benefits: ['Monthly Pension'], documents: ['ST Certificate', 'Aadhaar', 'Bank Account'] },

{ id: 'finance4', title: 'Taposili Bandhu Scheme', category: 'Financial', state: 'West Bengal', level: 'State', subsidy: 'Monthly Pension', overview: 'Social pension scheme for eligible Scheduled Caste beneficiaries.', applyLink: 'https://socialsecurity.wb.gov.in', tags: ['Pension', 'SC'], eligibility: ['Eligible SC Beneficiary'], benefits: ['Monthly Pension'], documents: ['SC Certificate', 'Aadhaar', 'Bank Account'] },

{ id: 'finance5', title: 'e-Shram Card', category: 'Financial', state: 'India', level: 'Central', subsidy: 'Social Security Benefits', overview: 'National database and social security support for unorganized workers.', applyLink: 'https://eshram.gov.in', tags: ['Workers', 'Social Security'], eligibility: ['Unorganized Workers'], benefits: ['National Registration', 'Scheme Access'], documents: ['Aadhaar', 'Bank Account'] },

{ id: 'finance6', title: 'Pradhan Mantri Jan Dhan Yojana', category: 'Financial', state: 'India', level: 'Central', subsidy: 'Zero Balance Bank Account', overview: 'Financial inclusion scheme providing basic banking facilities.', applyLink: 'https://pmjdy.gov.in', tags: ['Banking', 'Financial Inclusion'], eligibility: ['Indian Citizen'], benefits: ['Bank Account', 'RuPay Card', 'Insurance'], documents: ['Aadhaar', 'Identity Proof'] },

{ id: 'finance7', title: 'Atal Pension Yojana', category: 'Financial', state: 'India', level: 'Central', subsidy: 'Guaranteed Monthly Pension', overview: 'Pension scheme for workers in the unorganized sector.', applyLink: 'https://www.npscra.nsdl.co.in', tags: ['Pension'], eligibility: ['18-40 Years'], benefits: ['Monthly Pension'], documents: ['Aadhaar', 'Bank Account'] },

{ id: 'finance8', title: 'Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)', category: 'Financial', state: 'India', level: 'Central', subsidy: '₹2 Lakh Life Insurance', overview: 'Affordable life insurance scheme.', applyLink: 'https://jansuraksha.gov.in', tags: ['Life Insurance'], eligibility: ['18-50 Years'], benefits: ['₹2 Lakh Insurance'], documents: ['Bank Account', 'Aadhaar'] },

{ id: 'finance9', title: 'Pradhan Mantri Suraksha Bima Yojana (PMSBY)', category: 'Financial', state: 'India', level: 'Central', subsidy: '₹2 Lakh Accident Insurance', overview: 'Affordable accidental insurance coverage.', applyLink: 'https://jansuraksha.gov.in', tags: ['Accident Insurance'], eligibility: ['18-70 Years'], benefits: ['₹2 Lakh Accident Cover'], documents: ['Bank Account', 'Aadhaar'] },

{ id: 'finance10', title: 'Pradhan Mantri Mudra Yojana (PMMY)', category: 'Financial', state: 'India', level: 'Central', subsidy: 'Loan up to ₹20 Lakh', overview: 'Business loan for small entrepreneurs.', applyLink: 'https://www.mudra.org.in', tags: ['Business Loan'], eligibility: ['Small Business Owner'], benefits: ['Collateral Free Loan'], documents: ['Business Proof', 'Aadhaar'] },

{ id: 'finance11', title: 'PM SVANidhi', category: 'Financial', state: 'India', level: 'Central', subsidy: 'Working Capital Loan', overview: 'Loan scheme for street vendors.', applyLink: 'https://pmsvanidhi.mohua.gov.in', tags: ['Street Vendors'], eligibility: ['Eligible Street Vendors'], benefits: ['Collateral Free Loan'], documents: ['Vendor Certificate', 'Aadhaar'] },

{ id: 'finance12', title: 'PM Vishwakarma', category: 'Financial', state: 'India', level: 'Central', subsidy: 'Loan, Toolkit & Training', overview: 'Support for traditional artisans and craftspeople.', applyLink: 'https://pmvishwakarma.gov.in', tags: ['Artisan'], eligibility: ['Eligible Traditional Artisan'], benefits: ['Loan', 'Training', 'Toolkit'], documents: ['Aadhaar', 'Occupation Proof'] },

{ id: 'finance13', title: 'Sukanya Samriddhi Yojana', category: 'Financial', state: 'India', level: 'Central', subsidy: 'High Interest Savings Scheme', overview: 'Savings scheme for the girl child.', applyLink: 'https://www.indiapost.gov.in', tags: ['Savings', 'Girl Child'], eligibility: ['Girl Child below 10 Years'], benefits: ['Tax Benefits', 'High Interest'], documents: ['Birth Certificate', 'Aadhaar'] },

{ id: 'finance14', title: 'Kisan Credit Card (KCC)', category: 'Financial', state: 'India', level: 'Central', subsidy: 'Agricultural Credit', overview: 'Credit support for farmers.', applyLink: 'https://pmkisan.gov.in', tags: ['Farmer'], eligibility: ['Eligible Farmer'], benefits: ['Crop Loan'], documents: ['Land Record', 'Aadhaar'] },

{ id: 'finance15', title: 'SHG Credit Linkage Programme', category: 'Financial', state: 'West Bengal', level: 'State', subsidy: 'Bank Credit Support', overview: 'Credit linkage support for registered Self Help Groups.', applyLink: 'https://anandadhara.wb.gov.in', tags: ['SHG'], eligibility: ['Registered SHGs'], benefits: ['Bank Loan'], documents: ['SHG Registration'] },

{ id: 'finance16', title: 'Universal Membership Assistance for Cooperative Societies', category: 'Financial', state: 'West Bengal', level: 'State', subsidy: 'Financial Support', overview: 'Financial assistance for cooperative society members.', applyLink: 'https://coopwb.in', tags: ['Cooperative'], eligibility: ['Registered Members'], benefits: ['Financial Assistance'], documents: ['Membership Certificate'] },

{ id: 'finance17', title: 'Cooperative Share Capital Assistance Scheme', category: 'Financial', state: 'West Bengal', level: 'State', subsidy: 'Share Capital Support', overview: 'Government assistance to cooperative institutions.', applyLink: 'https://coopwb.in', tags: ['Cooperative'], eligibility: ['Eligible Cooperative Society'], benefits: ['Share Capital Assistance'], documents: ['Registration Certificate'] },

{ id: 'finance18', title: 'Pension Benefit Scheme for Registered Workers', category: 'Financial', state: 'West Bengal', level: 'State', subsidy: 'Monthly Pension', overview: 'Pension support for registered workers under Labour Welfare schemes.', applyLink: 'https://wblabour.gov.in', tags: ['Labour', 'Pension'], eligibility: ['Registered Workers'], benefits: ['Monthly Pension'], documents: ['Labour Registration', 'Aadhaar'] },

{ id: 'finance19', title: 'Accidental Benefit Scheme', category: 'Financial', state: 'West Bengal', level: 'State', subsidy: 'Financial Compensation', overview: 'Financial assistance in case of accidental death or disability of registered workers.', applyLink: 'https://wblabour.gov.in', tags: ['Insurance', 'Workers'], eligibility: ['Registered Workers'], benefits: ['Accident Compensation'], documents: ['Labour Registration', 'Medical Report'] },

{ id: 'finance20', title: 'Treatment for Major Ailments Assistance', category: 'Financial', state: 'West Bengal', level: 'State', subsidy: 'Medical Financial Assistance', overview: 'Financial assistance for treatment of major illnesses under Labour Welfare schemes.', applyLink: 'https://wblabour.gov.in', tags: ['Medical Assistance'], eligibility: ['Registered Workers'], benefits: ['Treatment Cost Assistance'], documents: ['Medical Certificate', 'Labour Registration'] },
    ],
    employment: [
{ id: 'employment1', title: 'Employment Bank', category: 'Employment', state: 'West Bengal', level: 'State', subsidy: 'Free Registration', overview: 'Online employment assistance portal for job seekers in West Bengal.', applyLink: 'https://employmentbankwb.gov.in', tags: ['Jobs', 'Employment'], eligibility: ['West Bengal Resident', 'Job Seeker'], benefits: ['Job Alerts', 'Employment Assistance', 'Career Support'], documents: ['Aadhaar', 'Educational Certificate'] },

{ id: 'employment2', title: 'Karma Sathi Prakalpa', category: 'Employment', state: 'West Bengal', level: 'State', subsidy: 'Loan up to ₹2 Lakh', overview: 'Financial assistance to unemployed youth for self-employment.', applyLink: 'https://www.wb.gov.in', tags: ['Self Employment', 'Youth'], eligibility: ['Eligible Youth'], benefits: ['Business Loan', 'Self Employment'], documents: ['Aadhaar', 'Project Report', 'Bank Details'] },

{ id: 'employment3', title: 'Yuvashree Prakalpa', category: 'Employment', state: 'West Bengal', level: 'State', subsidy: 'Monthly Allowance', overview: 'Financial assistance to registered unemployed youth.', applyLink: 'https://employmentbankwb.gov.in', tags: ['Youth', 'Allowance'], eligibility: ['Registered Unemployed Youth'], benefits: ['Monthly Allowance'], documents: ['Employment Bank Registration', 'Aadhaar'] },

{ id: 'employment4', title: 'Utkarsh Bangla', category: 'Employment', state: 'West Bengal', level: 'State', subsidy: 'Free Skill Training', overview: 'Skill development programme for employment and livelihood.', applyLink: 'https://utkarshbangla.gov.in', tags: ['Skill Development'], eligibility: ['Eligible Youth'], benefits: ['Free Training', 'Placement Assistance'], documents: ['Aadhaar', 'Educational Certificate'] },

{ id: 'employment5', title: 'Bangla Sahayata Kendra Employment Services', category: 'Employment', state: 'West Bengal', level: 'State', subsidy: 'Free Service', overview: 'Employment-related government services through BSK.', applyLink: 'https://bsk.wb.gov.in', tags: ['BSK'], eligibility: ['Citizens'], benefits: ['Application Assistance'], documents: ['As Required'] },

{ id: 'employment6', title: 'West Bengal Career Guidance Portal', category: 'Employment', state: 'West Bengal', level: 'State', subsidy: 'Free Service', overview: 'Career counselling and employment guidance for job seekers.', applyLink: 'https://employmentbankwb.gov.in', tags: ['Career'], eligibility: ['Students', 'Job Seekers'], benefits: ['Career Guidance'], documents: [] },

{ id: 'employment7', title: 'Employment Exchange Registration', category: 'Employment', state: 'West Bengal', level: 'State', subsidy: 'Free Registration', overview: 'Register with Employment Exchange for job opportunities.', applyLink: 'https://employmentbankwb.gov.in', tags: ['Employment Exchange'], eligibility: ['Eligible Job Seekers'], benefits: ['Government Job Registration'], documents: ['Aadhaar', 'Educational Certificate'] },

{ id: 'employment8', title: 'Employment Exchange Renewal', category: 'Employment', state: 'West Bengal', level: 'State', subsidy: 'Free Service', overview: 'Renew Employment Exchange registration online.', applyLink: 'https://employmentbankwb.gov.in', tags: ['Renewal'], eligibility: ['Registered Candidates'], benefits: ['Registration Renewal'], documents: ['Employment Exchange ID'] },

{ id: 'employment9', title: 'Employment Exchange Job Search', category: 'Employment', state: 'West Bengal', level: 'State', subsidy: 'Free Service', overview: 'Search available jobs through the Employment Bank.', applyLink: 'https://employmentbankwb.gov.in', tags: ['Job Search'], eligibility: ['Registered Users'], benefits: ['Job Search'], documents: [] },

{ id: 'employment10', title: 'Employment Exchange Vacancy Notification', category: 'Employment', state: 'West Bengal', level: 'State', subsidy: 'Free Service', overview: 'Receive notifications of government and private vacancies.', applyLink: 'https://employmentbankwb.gov.in', tags: ['Vacancy'], eligibility: ['Registered Users'], benefits: ['Vacancy Alerts'], documents: [] },

{ id: 'employment11', title: 'Apprentice Registration', category: 'Employment', state: 'West Bengal', level: 'State', subsidy: 'Stipend as Applicable', overview: 'Registration for apprenticeship opportunities.', applyLink: 'https://www.apprenticeshipindia.gov.in', tags: ['Apprenticeship'], eligibility: ['Eligible Students'], benefits: ['Industry Training'], documents: ['Educational Certificate', 'Aadhaar'] },

{ id: 'employment12', title: 'Skill Training & Placement Assistance', category: 'Employment', state: 'West Bengal', level: 'State', subsidy: 'Free Training', overview: 'Government-supported skill development with placement assistance.', applyLink: 'https://utkarshbangla.gov.in', tags: ['Training'], eligibility: ['Eligible Youth'], benefits: ['Training', 'Placement'], documents: ['Aadhaar'] },

{ id: 'employment13', title: 'Self Help Group Employment Support', category: 'Employment', state: 'West Bengal', level: 'State', subsidy: 'Financial & Training Support', overview: 'Employment support through Self Help Groups.', applyLink: 'https://anandadhara.wb.gov.in', tags: ['SHG'], eligibility: ['Registered SHGs'], benefits: ['Training', 'Financial Support'], documents: ['SHG Registration'] },

{ id: 'employment14', title: 'Self Employment Scheme for Registered Workers', category: 'Employment', state: 'West Bengal', level: 'State', subsidy: 'Financial Assistance', overview: 'Support for registered workers to start self-employment.', applyLink: 'https://wblabour.gov.in', tags: ['Self Employment'], eligibility: ['Registered Workers'], benefits: ['Financial Assistance'], documents: ['Labour Registration'] },

{ id: 'employment15', title: 'MSME Entrepreneurship Support', category: 'Employment', state: 'West Bengal', level: 'State', subsidy: 'Business Support', overview: 'Support for micro, small and medium enterprises.', applyLink: 'https://wbmsme.gov.in', tags: ['MSME'], eligibility: ['Entrepreneurs'], benefits: ['Business Assistance'], documents: ['Business Registration'] },

{ id: 'employment16', title: 'Prime Minister Employment Generation Programme (PMEGP)', category: 'Employment', state: 'India', level: 'Central', subsidy: 'Subsidized Business Loan', overview: 'Credit-linked subsidy scheme for self-employment.', applyLink: 'https://www.kviconline.gov.in', tags: ['PMEGP'], eligibility: ['Eligible Entrepreneurs'], benefits: ['Business Loan Subsidy'], documents: ['Project Report', 'Aadhaar'] },

{ id: 'employment17', title: 'PM Internship Scheme', category: 'Employment', state: 'India', level: 'Central', subsidy: 'Monthly Stipend', overview: 'Internship opportunities for eligible youth.', applyLink: 'https://pminternship.mca.gov.in', tags: ['Internship'], eligibility: ['Eligible Students'], benefits: ['Industry Experience', 'Stipend'], documents: ['Educational Certificate'] },

{ id: 'employment18', title: 'National Career Service (NCS)', category: 'Employment', state: 'India', level: 'Central', subsidy: 'Free Employment Service', overview: 'National employment and career services portal.', applyLink: 'https://www.ncs.gov.in', tags: ['Career'], eligibility: ['Job Seekers'], benefits: ['Job Search', 'Career Guidance'], documents: ['Aadhaar'] },

{ id: 'employment19', title: 'Apprenticeship India (NAPS)', category: 'Employment', state: 'India', level: 'Central', subsidy: 'Government Supported Apprenticeship', overview: 'National Apprenticeship Promotion Scheme portal.', applyLink: 'https://www.apprenticeshipindia.gov.in', tags: ['Apprenticeship'], eligibility: ['Eligible Candidates'], benefits: ['Training', 'Stipend'], documents: ['Educational Certificate'] },

{ id: 'employment20', title: 'e-Shram Registration', category: 'Employment', state: 'India', level: 'Central', subsidy: 'Social Security Registration', overview: 'Registration portal for unorganized workers.', applyLink: 'https://eshram.gov.in', tags: ['Workers'], eligibility: ['Unorganized Workers'], benefits: ['National Worker ID'], documents: ['Aadhaar', 'Bank Account'] },    ],
  
skill: [
{ id: 'skill1', title: 'Utkarsh Bangla', category: 'Skill Development', state: 'West Bengal', level: 'State', subsidy: 'Free Skill Training', overview: 'State flagship skill development programme providing free vocational training and placement support.', applyLink: 'https://utkarshbangla.gov.in', tags: ['Training', 'Placement'], eligibility: ['Eligible Youth'], benefits: ['Free Training', 'Placement Assistance'], documents: ['Aadhaar', 'Educational Certificate'] },

{ id: 'skill2', title: 'Paschim Banga Society for Skill Development (PBSSD)', category: 'Skill Development', state: 'West Bengal', level: 'State', subsidy: 'Free Training', overview: 'State agency offering industry-oriented skill development programmes.', applyLink: 'https://pbssd.gov.in', tags: ['PBSSD', 'Training'], eligibility: ['Eligible Candidates'], benefits: ['Skill Certification', 'Placement Support'], documents: ['Aadhaar', 'Educational Certificate'] },

{ id: 'skill3', title: 'Skill Training Registration', category: 'Skill Development', state: 'West Bengal', level: 'State', subsidy: 'Free Registration', overview: 'Online registration for government-approved skill development courses.', applyLink: 'https://pbssd.gov.in', tags: ['Registration'], eligibility: ['Eligible Candidates'], benefits: ['Course Enrollment'], documents: ['Aadhaar'] },

{ id: 'skill4', title: 'Placement Assistance Programme', category: 'Skill Development', state: 'West Bengal', level: 'State', subsidy: 'Free Employment Support', overview: 'Placement support for candidates completing government skill training.', applyLink: 'https://pbssd.gov.in', tags: ['Placement'], eligibility: ['Certified Candidates'], benefits: ['Job Placement'], documents: ['Training Certificate'] },

{ id: 'skill5', title: 'Recognition of Prior Learning (RPL)', category: 'Skill Development', state: 'India', level: 'Central', subsidy: 'Free Skill Certification', overview: 'Certifies existing skills of experienced workers.', applyLink: 'https://www.skillindia.gov.in', tags: ['RPL', 'Certification'], eligibility: ['Experienced Workers'], benefits: ['Skill Certificate'], documents: ['Identity Proof'] },

{ id: 'skill6', title: 'Pradhan Mantri Kaushal Vikas Yojana (PMKVY)', category: 'Skill Development', state: 'India', level: 'Central', subsidy: 'Free Skill Training', overview: 'National flagship skill development programme.', applyLink: 'https://www.skillindia.gov.in', tags: ['PMKVY'], eligibility: ['Indian Citizens'], benefits: ['Training', 'Certification'], documents: ['Aadhaar'] },

{ id: 'skill7', title: 'Skill India Digital Hub', category: 'Skill Development', state: 'India', level: 'Central', subsidy: 'Free Digital Learning', overview: 'Digital platform for skill development courses and certifications.', applyLink: 'https://www.skillindiadigital.gov.in', tags: ['Digital Learning'], eligibility: ['Everyone'], benefits: ['Online Courses'], documents: ['Aadhaar'] },

{ id: 'skill8', title: 'Jan Shikshan Sansthan (JSS)', category: 'Skill Development', state: 'India', level: 'Central', subsidy: 'Free Vocational Training', overview: 'Vocational skill development for non-literate, neo-literate and school dropouts.', applyLink: 'https://jss.gov.in', tags: ['Vocational Training'], eligibility: ['Eligible Candidates'], benefits: ['Free Training'], documents: ['Identity Proof'] },

{ id: 'skill9', title: 'National Apprenticeship Promotion Scheme (NAPS)', category: 'Skill Development', state: 'India', level: 'Central', subsidy: 'Government Supported Apprenticeship', overview: 'Promotes apprenticeship training with industry.', applyLink: 'https://www.apprenticeshipindia.gov.in', tags: ['Apprenticeship'], eligibility: ['Eligible Candidates'], benefits: ['Training', 'Stipend'], documents: ['Educational Certificate'] },

{ id: 'skill10', title: 'National Apprenticeship Training Scheme (NATS)', category: 'Skill Development', state: 'India', level: 'Central', subsidy: 'Paid Apprenticeship', overview: 'Apprenticeship programme for graduates and diploma holders.', applyLink: 'https://nats.education.gov.in', tags: ['Graduate Apprenticeship'], eligibility: ['Graduate', 'Diploma Holder'], benefits: ['Industry Training', 'Stipend'], documents: ['Degree Certificate'] },

{ id: 'skill11', title: 'Industrial Training Institute (ITI) Admission', category: 'Skill Development', state: 'West Bengal', level: 'State', subsidy: 'Affordable Technical Education', overview: 'Admission to government Industrial Training Institutes.', applyLink: 'https://scvtwb.in', tags: ['ITI'], eligibility: ['Eligible Students'], benefits: ['Technical Training'], documents: ['Marksheet', 'Aadhaar'] },

{ id: 'skill12', title: 'Polytechnic Skill Development', category: 'Skill Development', state: 'West Bengal', level: 'State', subsidy: 'Technical Education', overview: 'Technical diploma programmes through government polytechnics.', applyLink: 'https://webscte.co.in', tags: ['Polytechnic'], eligibility: ['Eligible Students'], benefits: ['Technical Skills'], documents: ['Educational Certificate'] },

{ id: 'skill13', title: 'MSME Skill Development Programme', category: 'Skill Development', state: 'West Bengal', level: 'State', subsidy: 'Free Entrepreneur Training', overview: 'Skill development and entrepreneurship training through MSME Department.', applyLink: 'https://wbmsme.gov.in', tags: ['MSME'], eligibility: ['Entrepreneurs'], benefits: ['Business Skills'], documents: ['Identity Proof'] },

{ id: 'skill14', title: 'Women Skill Development Programme', category: 'Skill Development', state: 'West Bengal', level: 'State', subsidy: 'Free Training', overview: 'Vocational skill training programmes exclusively for women.', applyLink: 'https://pbssd.gov.in', tags: ['Women'], eligibility: ['Eligible Women'], benefits: ['Skill Training'], documents: ['Aadhaar'] },

{ id: 'skill15', title: 'Youth Skill Development Programme', category: 'Skill Development', state: 'West Bengal', level: 'State', subsidy: 'Free Training', overview: 'Employment-oriented skill training for unemployed youth.', applyLink: 'https://pbssd.gov.in', tags: ['Youth'], eligibility: ['Eligible Youth'], benefits: ['Training', 'Placement'], documents: ['Aadhaar'] },

{ id: 'skill16', title: 'Digital Skill Training Programme', category: 'Skill Development', state: 'West Bengal', level: 'State', subsidy: 'Free Digital Skills', overview: 'Government-supported digital literacy and computer training.', applyLink: 'https://pbssd.gov.in', tags: ['Digital Skills'], eligibility: ['Eligible Candidates'], benefits: ['Computer Skills'], documents: ['Identity Proof'] },

{ id: 'skill17', title: 'Entrepreneurship Development Programme', category: 'Skill Development', state: 'West Bengal', level: 'State', subsidy: 'Business Development Support', overview: 'Training programme for aspiring entrepreneurs.', applyLink: 'https://wbmsme.gov.in', tags: ['Entrepreneurship'], eligibility: ['Aspiring Entrepreneurs'], benefits: ['Business Training'], documents: ['Identity Proof'] },

{ id: 'skill18', title: 'Skill Certification Service', category: 'Skill Development', state: 'West Bengal', level: 'State', subsidy: 'Free Certification', overview: 'Assessment and certification of vocational skills.', applyLink: 'https://pbssd.gov.in', tags: ['Certification'], eligibility: ['Eligible Candidates'], benefits: ['Government Skill Certificate'], documents: ['Training Details'] },

{ id: 'skill19', title: 'Career Counselling & Guidance', category: 'Skill Development', state: 'West Bengal', level: 'State', subsidy: 'Free Service', overview: 'Career counselling and guidance for students and job seekers.', applyLink: 'https://employmentbankwb.gov.in', tags: ['Career'], eligibility: ['Students', 'Job Seekers'], benefits: ['Career Guidance'], documents: [] },

{ id: 'skill20', title: 'Skill Development Course Finder', category: 'Skill Development', state: 'West Bengal', level: 'State', subsidy: 'Free Information Service', overview: 'Search government-approved skill development courses and training centres.', applyLink: 'https://pbssd.gov.in', tags: ['Courses'], eligibility: ['Everyone'], benefits: ['Course Search'], documents: [] },    ],
   
rural: [
{ id: 'rural1', title: 'Anandadhara', category: 'Rural Development', state: 'West Bengal', level: 'State', subsidy: 'Financial & Livelihood Support', overview: 'State rural livelihood mission promoting Self Help Groups (SHGs).', applyLink: 'https://anandadhara.wb.gov.in', tags: ['SHG', 'Livelihood'], eligibility: ['Rural Women'], benefits: ['Financial Assistance', 'Skill Training'], documents: ['Aadhaar', 'SHG Registration'] },

{ id: 'rural2', title: 'MGNREGA Job Card Services', category: 'Rural Development', state: 'West Bengal', level: 'State', subsidy: '100 Days Wage Employment', overview: 'Employment guarantee scheme providing wage employment in rural areas.', applyLink: 'https://nrega.nic.in', tags: ['Employment', 'MGNREGA'], eligibility: ['Rural Households'], benefits: ['100 Days Employment'], documents: ['Aadhaar', 'Job Card'] },

{ id: 'rural3', title: 'MGNREGA Job Card Application', category: 'Rural Development', state: 'West Bengal', level: 'State', subsidy: 'Free Service', overview: 'Apply for a new MGNREGA Job Card.', applyLink: 'https://nrega.nic.in', tags: ['Job Card'], eligibility: ['Rural Residents'], benefits: ['Employment Registration'], documents: ['Aadhaar', 'Residence Proof'] },

{ id: 'rural4', title: 'MGNREGA Muster Roll & Payment Status', category: 'Rural Development', state: 'West Bengal', level: 'State', subsidy: 'Free Service', overview: 'Check attendance, work details and payment status online.', applyLink: 'https://nrega.nic.in', tags: ['Payment'], eligibility: ['Job Card Holders'], benefits: ['Payment Tracking'], documents: ['Job Card Number'] },

{ id: 'rural5', title: 'Gram Panchayat Citizen Services', category: 'Rural Development', state: 'West Bengal', level: 'State', subsidy: 'Government Services', overview: 'Access Gram Panchayat related public services online.', applyLink: 'https://prd.wb.gov.in', tags: ['Panchayat'], eligibility: ['Citizens'], benefits: ['Online Services'], documents: ['As Required'] },

{ id: 'rural6', title: 'e-Panchayat Services', category: 'Rural Development', state: 'West Bengal', level: 'State', subsidy: 'Digital Governance', overview: 'Online Panchayat administration and citizen services.', applyLink: 'https://prd.wb.gov.in', tags: ['e-Governance'], eligibility: ['Citizens'], benefits: ['Digital Services'], documents: [] },

{ id: 'rural7', title: 'Bangla Gram Panchayat Portal', category: 'Rural Development', state: 'West Bengal', level: 'State', subsidy: 'Free Service', overview: 'Online information and services of Gram Panchayats.', applyLink: 'https://prd.wb.gov.in', tags: ['Gram Panchayat'], eligibility: ['Citizens'], benefits: ['Village Information'], documents: [] },

{ id: 'rural8', title: 'Rural Housing Beneficiary Services', category: 'Rural Development', state: 'West Bengal', level: 'State', subsidy: 'Housing Services', overview: 'Track rural housing applications and beneficiary details.', applyLink: 'https://prd.wb.gov.in', tags: ['Housing'], eligibility: ['Eligible Families'], benefits: ['Housing Status'], documents: ['Application ID'] },

{ id: 'rural9', title: 'Self Help Group (SHG) Registration', category: 'Rural Development', state: 'West Bengal', level: 'State', subsidy: 'Free Registration', overview: 'Registration support for rural Self Help Groups.', applyLink: 'https://anandadhara.wb.gov.in', tags: ['SHG'], eligibility: ['Rural Women'], benefits: ['SHG Benefits'], documents: ['Identity Proof'] },

{ id: 'rural10', title: 'Village Livelihood Mission Services', category: 'Rural Development', state: 'West Bengal', level: 'State', subsidy: 'Livelihood Support', overview: 'Supports livelihood generation activities in rural areas.', applyLink: 'https://anandadhara.wb.gov.in', tags: ['Livelihood'], eligibility: ['SHG Members'], benefits: ['Income Generation'], documents: ['SHG Membership'] },

{ id: 'rural11', title: 'Rural Sanitation Programme', category: 'Rural Development', state: 'West Bengal', level: 'State', subsidy: 'Sanitation Support', overview: 'Improves sanitation facilities in rural households.', applyLink: 'https://prd.wb.gov.in', tags: ['Sanitation'], eligibility: ['Rural Families'], benefits: ['Sanitation Facilities'], documents: ['Identity Proof'] },

{ id: 'rural12', title: 'Village Infrastructure Development', category: 'Rural Development', state: 'West Bengal', level: 'State', subsidy: 'Infrastructure Development', overview: 'Development of roads, drainage and community assets.', applyLink: 'https://prd.wb.gov.in', tags: ['Infrastructure'], eligibility: ['Villages'], benefits: ['Improved Infrastructure'], documents: [] },

{ id: 'rural13', title: 'Social Audit Portal (MGNREGA)', category: 'Rural Development', state: 'West Bengal', level: 'State', subsidy: 'Transparency Service', overview: 'View social audit reports for rural development works.', applyLink: 'https://nrega.nic.in', tags: ['Audit'], eligibility: ['Everyone'], benefits: ['Transparency'], documents: [] },

{ id: 'rural14', title: 'Gram Sansad Information', category: 'Rural Development', state: 'West Bengal', level: 'State', subsidy: 'Information Service', overview: 'Information regarding Gram Sansad meetings and activities.', applyLink: 'https://prd.wb.gov.in', tags: ['Gram Sansad'], eligibility: ['Citizens'], benefits: ['Local Governance Information'], documents: [] },

{ id: 'rural15', title: 'Rural Development Project Monitoring', category: 'Rural Development', state: 'West Bengal', level: 'State', subsidy: 'Free Service', overview: 'Track implementation of rural development projects.', applyLink: 'https://prd.wb.gov.in', tags: ['Project Monitoring'], eligibility: ['Citizens'], benefits: ['Project Status'], documents: [] },

{ id: 'rural16', title: 'Deendayal Antyodaya Yojana – National Rural Livelihood Mission (DAY-NRLM)', category: 'Rural Development', state: 'India', level: 'Central', subsidy: 'Livelihood Support', overview: 'National mission for poverty reduction through SHGs.', applyLink: 'https://aajeevika.gov.in', tags: ['NRLM'], eligibility: ['Rural Poor'], benefits: ['Livelihood Assistance'], documents: ['Identity Proof'] },

{ id: 'rural17', title: 'PM Gram Sadak Yojana (PMGSY)', category: 'Rural Development', state: 'India', level: 'Central', subsidy: 'Rural Road Development', overview: 'Provides all-weather road connectivity to rural areas.', applyLink: 'https://pmgsy.nic.in', tags: ['Road'], eligibility: ['Rural Areas'], benefits: ['Road Connectivity'], documents: [] },

{ id: 'rural18', title: 'Mission Antyodaya', category: 'Rural Development', state: 'India', level: 'Central', subsidy: 'Village Development', overview: 'Measures and improves socio-economic development of villages.', applyLink: 'https://missionantyodaya.nic.in', tags: ['Village Development'], eligibility: ['Rural Areas'], benefits: ['Development Planning'], documents: [] },

{ id: 'rural19', title: 'SVAMITVA Scheme', category: 'Rural Development', state: 'India', level: 'Central', subsidy: 'Property Rights', overview: 'Provides property cards to rural household owners using drone surveys.', applyLink: 'https://svamitva.nic.in', tags: ['Property'], eligibility: ['Rural Property Owners'], benefits: ['Property Card'], documents: ['Identity Proof'] },

{ id: 'rural20', title: 'e-Gram Swaraj', category: 'Rural Development', state: 'India', level: 'Central', subsidy: 'Digital Panchayat', overview: 'Online planning, accounting and monitoring system for Panchayats.', applyLink: 'https://egramswaraj.gov.in', tags: ['Panchayat'], eligibility: ['Gram Panchayats'], benefits: ['Digital Governance'], documents: [] },    ],
  
digital: [
{ id: 'digital1', title: 'Digital India Programme', category: 'Digital India', state: 'India', level: 'Central', subsidy: 'Digital Governance', overview: 'Flagship programme to transform India into a digitally empowered society and knowledge economy.', applyLink: 'https://digitalindia.gov.in', tags: ['Digital India'], eligibility: ['All Citizens'], benefits: ['Access to Digital Government Services'], documents: [] },

{ id: 'digital2', title: 'DigiLocker', category: 'Digital India', state: 'India', level: 'Central', subsidy: 'Free Digital Locker', overview: 'Secure cloud-based platform for storing and sharing official documents.', applyLink: 'https://digilocker.gov.in', tags: ['Documents'], eligibility: ['Aadhaar Holders'], benefits: ['Digital Documents'], documents: ['Aadhaar'] },

{ id: 'digital3', title: 'UMANG', category: 'Digital India', state: 'India', level: 'Central', subsidy: 'Free Government Services', overview: 'Single mobile platform providing access to hundreds of government services.', applyLink: 'https://web.umang.gov.in', tags: ['UMANG'], eligibility: ['Citizens'], benefits: ['One-stop Government Services'], documents: [] },

{ id: 'digital4', title: 'myScheme Portal', category: 'Digital India', state: 'India', level: 'Central', subsidy: 'Free Service', overview: 'Portal to discover and apply for eligible government schemes.', applyLink: 'https://www.myscheme.gov.in', tags: ['Government Schemes'], eligibility: ['Citizens'], benefits: ['Scheme Discovery'], documents: [] },

{ id: 'digital5', title: 'Common Service Centres (CSC)', category: 'Digital India', state: 'India', level: 'Central', subsidy: 'Citizen Service Centre', overview: 'Provides digital government services through village-level centres.', applyLink: 'https://csc.gov.in', tags: ['CSC'], eligibility: ['Citizens'], benefits: ['Access to e-Governance Services'], documents: [] },

{ id: 'digital6', title: 'Meri Pehchaan (National SSO)', category: 'Digital India', state: 'India', level: 'Central', subsidy: 'Free Login Service', overview: 'Single Sign-On platform for multiple government portals.', applyLink: 'https://meripehchaan.gov.in', tags: ['SSO'], eligibility: ['Citizens'], benefits: ['Single Login'], documents: ['Aadhaar (Optional)'] },

{ id: 'digital7', title: 'API Setu', category: 'Digital India', state: 'India', level: 'Central', subsidy: 'Digital Infrastructure', overview: 'API platform enabling secure exchange of government data and services.', applyLink: 'https://www.apisetu.gov.in', tags: ['API'], eligibility: ['Developers', 'Departments'], benefits: ['Digital Integration'], documents: [] },

{ id: 'digital8', title: 'Open Government Data (OGD) Platform', category: 'Digital India', state: 'India', level: 'Central', subsidy: 'Free Open Data', overview: 'Provides public access to datasets published by government departments.', applyLink: 'https://data.gov.in', tags: ['Open Data'], eligibility: ['Everyone'], benefits: ['Government Datasets'], documents: [] },

{ id: 'digital9', title: 'e-Hospital', category: 'Digital India', state: 'India', level: 'Central', subsidy: 'Free Digital Health Service', overview: 'Online hospital management including OPD appointment booking.', applyLink: 'https://ors.gov.in', tags: ['Hospital'], eligibility: ['Patients'], benefits: ['Online Appointments'], documents: ['Aadhaar (Optional)'] },

{ id: 'digital10', title: 'Online Registration System (ORS)', category: 'Digital India', state: 'India', level: 'Central', subsidy: 'Free Service', overview: 'Book appointments in government hospitals online.', applyLink: 'https://ors.gov.in', tags: ['Appointment'], eligibility: ['Citizens'], benefits: ['Hospital Booking'], documents: ['Mobile Number'] },

{ id: 'digital11', title: 'e-District Services', category: 'Digital India', state: 'India', level: 'Central', subsidy: 'Online Citizen Services', overview: 'Digital delivery of district-level certificates and services.', applyLink: 'https://edistrict.gov.in', tags: ['Certificates'], eligibility: ['Citizens'], benefits: ['Online Certificates'], documents: ['As Required'] },

{ id: 'digital12', title: 'National Scholarship Portal (NSP)', category: 'Digital India', state: 'India', level: 'Central', subsidy: 'Scholarship Portal', overview: 'Unified portal for Central and State scholarship applications.', applyLink: 'https://scholarships.gov.in', tags: ['Scholarship'], eligibility: ['Eligible Students'], benefits: ['Single Scholarship Portal'], documents: ['Aadhaar', 'Educational Documents'] },

{ id: 'digital13', title: 'BHIM UPI', category: 'Digital India', state: 'India', level: 'Central', subsidy: 'Free Digital Payment', overview: 'Government-backed Unified Payments Interface application.', applyLink: 'https://www.npci.org.in', tags: ['UPI'], eligibility: ['Bank Customers'], benefits: ['Cashless Payments'], documents: ['Bank Account'] },

{ id: 'digital14', title: 'eNAM', category: 'Digital India', state: 'India', level: 'Central', subsidy: 'Digital Agriculture Market', overview: 'Online agricultural marketing platform for farmers.', applyLink: 'https://enam.gov.in', tags: ['Agriculture'], eligibility: ['Farmers', 'Traders'], benefits: ['Online Trading'], documents: ['Farmer Registration'] },

{ id: 'digital15', title: 'GeM (Government e-Marketplace)', category: 'Digital India', state: 'India', level: 'Central', subsidy: 'Government Procurement Portal', overview: 'Online procurement portal for government buyers and sellers.', applyLink: 'https://gem.gov.in', tags: ['Procurement'], eligibility: ['Businesses'], benefits: ['Government Marketplace'], documents: ['Business Registration'] },

{ id: 'digital16', title: 'National Career Service (NCS)', category: 'Digital India', state: 'India', level: 'Central', subsidy: 'Free Employment Services', overview: 'Online employment and career guidance portal.', applyLink: 'https://www.ncs.gov.in', tags: ['Employment'], eligibility: ['Job Seekers'], benefits: ['Job Search'], documents: [] },

{ id: 'digital17', title: 'e-Sanjeevani', category: 'Digital India', state: 'India', level: 'Central', subsidy: 'Free Telemedicine', overview: 'Government telemedicine platform for online doctor consultation.', applyLink: 'https://esanjeevani.mohfw.gov.in', tags: ['Health'], eligibility: ['Citizens'], benefits: ['Online Consultation'], documents: [] },

{ id: 'digital18', title: 'National Digital Education Architecture (NDEAR)', category: 'Digital India', state: 'India', level: 'Central', subsidy: 'Digital Education', overview: 'Framework supporting digital education services in India.', applyLink: 'https://ndear.gov.in', tags: ['Education'], eligibility: ['Students', 'Teachers'], benefits: ['Digital Learning'], documents: [] },

{ id: 'digital19', title: 'PM-WANI', category: 'Digital India', state: 'India', level: 'Central', subsidy: 'Public Wi-Fi', overview: 'Public Wi-Fi initiative to improve internet accessibility.', applyLink: 'https://pmwani.gov.in', tags: ['Wi-Fi'], eligibility: ['Everyone'], benefits: ['Affordable Internet'], documents: [] },

{ id: 'digital20', title: 'BharatNet', category: 'Digital India', state: 'India', level: 'Central', subsidy: 'Broadband Infrastructure', overview: 'Provides high-speed broadband connectivity to Gram Panchayats across India.', applyLink: 'https://bharatnet.gov.in', tags: ['Broadband'], eligibility: ['Citizens', 'Institutions'], benefits: ['High-Speed Internet'], documents: [] },    ],
   
energy: [
{ id: 'energy1', title: 'Duare Sarkar – Electricity Services', category: 'Energy', state: 'West Bengal', level: 'State', subsidy: 'Government Service', overview: 'Electricity-related citizen services delivered through Duare Sarkar camps.', applyLink: 'https://ds.wb.gov.in', tags: ['Electricity', 'Duare Sarkar'], eligibility: ['West Bengal Residents'], benefits: ['Easy Access to Services'], documents: ['Aadhaar', 'Electricity Consumer Number'] },

{ id: 'energy2', title: 'WBSEDCL New Electricity Connection', category: 'Energy', state: 'West Bengal', level: 'State', subsidy: 'Online Service', overview: 'Apply online for a new domestic or commercial electricity connection.', applyLink: 'https://www.wbsedcl.in', tags: ['Electricity'], eligibility: ['Residents', 'Businesses'], benefits: ['New Electricity Connection'], documents: ['Identity Proof', 'Address Proof'] },

{ id: 'energy3', title: 'WBSEDCL Online Bill Payment', category: 'Energy', state: 'West Bengal', level: 'State', subsidy: 'Online Service', overview: 'Pay electricity bills securely through the official portal.', applyLink: 'https://www.wbsedcl.in', tags: ['Bill Payment'], eligibility: ['WBSEDCL Consumers'], benefits: ['Online Bill Payment'], documents: ['Consumer ID'] },

{ id: 'energy4', title: 'WBSEDCL Bill Download', category: 'Energy', state: 'West Bengal', level: 'State', subsidy: 'Free Service', overview: 'Download electricity bills online.', applyLink: 'https://www.wbsedcl.in', tags: ['Electricity Bill'], eligibility: ['Consumers'], benefits: ['Bill Download'], documents: ['Consumer ID'] },

{ id: 'energy5', title: 'WBSEDCL Bill History', category: 'Energy', state: 'West Bengal', level: 'State', subsidy: 'Free Service', overview: 'View electricity bill payment history.', applyLink: 'https://www.wbsedcl.in', tags: ['Bill History'], eligibility: ['Consumers'], benefits: ['Payment Records'], documents: ['Consumer ID'] },

{ id: 'energy6', title: 'WBSEDCL Complaint Registration', category: 'Energy', state: 'West Bengal', level: 'State', subsidy: 'Free Service', overview: 'Register complaints regarding electricity supply and billing.', applyLink: 'https://www.wbsedcl.in', tags: ['Complaint'], eligibility: ['Consumers'], benefits: ['Online Complaint'], documents: ['Consumer ID'] },

{ id: 'energy7', title: 'Power Outage Information', category: 'Energy', state: 'West Bengal', level: 'State', subsidy: 'Free Service', overview: 'Check scheduled and unscheduled power outages.', applyLink: 'https://www.wbsedcl.in', tags: ['Power Supply'], eligibility: ['Everyone'], benefits: ['Outage Updates'], documents: [] },

{ id: 'energy8', title: 'WBSEDCL Rooftop Solar Net Metering', category: 'Energy', state: 'West Bengal', level: 'State', subsidy: 'Solar Net Metering', overview: 'Apply for rooftop solar net metering under WBSEDCL.', applyLink: 'https://www.wbsedcl.in', tags: ['Solar', 'Net Metering'], eligibility: ['Electricity Consumers'], benefits: ['Solar Energy Integration'], documents: ['Consumer ID', 'Property Documents'] },

{ id: 'energy9', title: 'WBREDA Solar Rooftop Programme', category: 'Energy', state: 'West Bengal', level: 'State', subsidy: 'Renewable Energy Support', overview: 'Promotion of rooftop solar installations through WBREDA.', applyLink: 'https://www.wbreda.org', tags: ['Solar Energy'], eligibility: ['Residents', 'Institutions'], benefits: ['Renewable Energy Support'], documents: ['Identity Proof'] },

{ id: 'energy10', title: 'Solar Water Pump Programme', category: 'Energy', state: 'West Bengal', level: 'State', subsidy: 'Solar Pump Assistance', overview: 'Promotion of solar-powered irrigation pumps for farmers.', applyLink: 'https://www.wbreda.org', tags: ['Solar Pump'], eligibility: ['Farmers'], benefits: ['Renewable Irrigation'], documents: ['Land Record', 'Aadhaar'] },

{ id: 'energy11', title: 'Energy Conservation Awareness Programme', category: 'Energy', state: 'West Bengal', level: 'State', subsidy: 'Free Service', overview: 'Awareness programme promoting efficient energy usage.', applyLink: 'https://www.wbreda.org', tags: ['Energy Saving'], eligibility: ['Everyone'], benefits: ['Energy Awareness'], documents: [] },

{ id: 'energy12', title: 'Electric Vehicle Charging Station Information', category: 'Energy', state: 'West Bengal', level: 'State', subsidy: 'Information Service', overview: 'Locate government-supported EV charging stations.', applyLink: 'https://www.wbreda.org', tags: ['EV'], eligibility: ['EV Owners'], benefits: ['Charging Station Locator'], documents: [] },

{ id: 'energy13', title: 'PM Surya Ghar: Muft Bijli Yojana', category: 'Energy', state: 'India', level: 'Central', subsidy: 'Subsidy for Rooftop Solar', overview: 'Financial assistance for residential rooftop solar systems.', applyLink: 'https://pmsuryaghar.gov.in', tags: ['Solar', 'Subsidy'], eligibility: ['Residential Consumers'], benefits: ['Solar Subsidy', 'Reduced Electricity Bills'], documents: ['Aadhaar', 'Electricity Bill'] },

{ id: 'energy14', title: 'National Rooftop Solar Portal', category: 'Energy', state: 'India', level: 'Central', subsidy: 'Solar Services', overview: 'Official portal for rooftop solar applications and subsidy.', applyLink: 'https://solarrooftop.gov.in', tags: ['Solar'], eligibility: ['Residential Consumers'], benefits: ['Online Solar Application'], documents: ['Electricity Consumer Number'] },

{ id: 'energy15', title: 'UJALA LED Programme', category: 'Energy', state: 'India', level: 'Central', subsidy: 'Affordable LED Bulbs', overview: 'Promotes energy-efficient LED lighting.', applyLink: 'https://www.eeslindia.org', tags: ['LED'], eligibility: ['Citizens'], benefits: ['Energy Saving'], documents: [] },

{ id: 'energy16', title: 'Street Lighting National Programme', category: 'Energy', state: 'India', level: 'Central', subsidy: 'Energy Efficient Street Lights', overview: 'Deployment of LED street lights for energy conservation.', applyLink: 'https://www.eeslindia.org', tags: ['Street Light'], eligibility: ['Urban Local Bodies'], benefits: ['Reduced Energy Consumption'], documents: [] },

{ id: 'energy17', title: 'National Energy Conservation Campaign', category: 'Energy', state: 'India', level: 'Central', subsidy: 'Awareness Programme', overview: 'Promotes efficient use of energy across sectors.', applyLink: 'https://beeindia.gov.in', tags: ['Energy Efficiency'], eligibility: ['Everyone'], benefits: ['Energy Saving Awareness'], documents: [] },

{ id: 'energy18', title: 'Energy Efficiency Services', category: 'Energy', state: 'India', level: 'Central', subsidy: 'Energy Efficient Solutions', overview: 'Government initiatives for improving energy efficiency.', applyLink: 'https://www.eeslindia.org', tags: ['Efficiency'], eligibility: ['Citizens', 'Institutions'], benefits: ['Energy Efficient Products'], documents: [] },

{ id: 'energy19', title: 'Electricity Consumer Grievance Portal', category: 'Energy', state: 'West Bengal', level: 'State', subsidy: 'Free Service', overview: 'Submit and track electricity-related grievances online.', applyLink: 'https://www.wbsedcl.in', tags: ['Grievance'], eligibility: ['Consumers'], benefits: ['Complaint Tracking'], documents: ['Consumer Number'] },

{ id: 'energy20', title: 'Electricity Connection Status', category: 'Energy', state: 'West Bengal', level: 'State', subsidy: 'Free Service', overview: 'Track the status of electricity connection applications.', applyLink: 'https://www.wbsedcl.in', tags: ['Status'], eligibility: ['Applicants'], benefits: ['Application Tracking'], documents: ['Application Number'] },    ],
    
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
{ id: 'legal1', title: 'West Bengal State Legal Services Authority (WBSLSA)', category: 'Legal', state: 'West Bengal', level: 'State', subsidy: 'Free Legal Aid', overview: 'Provides free legal services to eligible citizens.', applyLink: 'https://wbslsa.bangla.gov.in', tags: ['Legal Aid'], eligibility: ['Eligible Citizens'], benefits: ['Free Legal Assistance'], documents: ['Identity Proof'] },

{ id: 'legal2', title: 'District Legal Services Authority (DLSA)', category: 'Legal', state: 'West Bengal', level: 'District', subsidy: 'Free Legal Aid', overview: 'District-level legal aid and assistance services.', applyLink: 'https://wbslsa.bangla.gov.in', tags: ['Legal Aid'], eligibility: ['Eligible Citizens'], benefits: ['Free Legal Services'], documents: ['Identity Proof'] },

{ id: 'legal3', title: 'Taluk Legal Services Committee', category: 'Legal', state: 'West Bengal', level: 'Sub-District', subsidy: 'Free Legal Aid', overview: 'Provides legal services at the taluk level.', applyLink: 'https://wbslsa.bangla.gov.in', tags: ['Legal Aid'], eligibility: ['Eligible Citizens'], benefits: ['Legal Guidance'], documents: ['Identity Proof'] },

{ id: 'legal4', title: 'National Lok Adalat', category: 'Legal', state: 'West Bengal', level: 'National', subsidy: 'Free', overview: 'Alternative dispute resolution through Lok Adalat.', applyLink: 'https://wbslsa.bangla.gov.in', tags: ['Lok Adalat'], eligibility: ['Litigants'], benefits: ['Quick Settlement'], documents: ['Case Details'] },

{ id: 'legal5', title: 'Permanent Lok Adalat', category: 'Legal', state: 'West Bengal', level: 'State', subsidy: 'Free', overview: 'Permanent forum for settlement of public utility disputes.', applyLink: 'https://wbslsa.bangla.gov.in', tags: ['Dispute Resolution'], eligibility: ['Eligible Citizens'], benefits: ['Fast Resolution'], documents: ['Case Documents'] },

{ id: 'legal6', title: 'Legal Aid Clinic', category: 'Legal', state: 'West Bengal', level: 'State', subsidy: 'Free', overview: 'Provides legal consultation and awareness services.', applyLink: 'https://wbslsa.bangla.gov.in', tags: ['Legal Clinic'], eligibility: ['Everyone'], benefits: ['Legal Advice'], documents: [] },

{ id: 'legal7', title: 'Legal Awareness Programme', category: 'Legal', state: 'West Bengal', level: 'State', subsidy: 'Free', overview: 'Promotes legal awareness among citizens.', applyLink: 'https://wbslsa.bangla.gov.in', tags: ['Awareness'], eligibility: ['Everyone'], benefits: ['Legal Education'], documents: [] },

{ id: 'legal8', title: 'Mediation Centre', category: 'Legal', state: 'West Bengal', level: 'State', subsidy: 'Free', overview: 'Settlement of disputes through mediation.', applyLink: 'https://wbslsa.bangla.gov.in', tags: ['Mediation'], eligibility: ['Disputing Parties'], benefits: ['Peaceful Settlement'], documents: ['Case Details'] },

{ id: 'legal9', title: 'Victim Compensation Scheme', category: 'Legal', state: 'West Bengal', level: 'State', subsidy: 'Financial Compensation', overview: 'Compensation for eligible victims of crime.', applyLink: 'https://wbslsa.bangla.gov.in', tags: ['Victim Support'], eligibility: ['Eligible Victims'], benefits: ['Financial Compensation'], documents: ['FIR', 'Identity Proof'] },

{ id: 'legal10', title: 'Free Legal Aid for Women', category: 'Legal', state: 'West Bengal', level: 'State', subsidy: 'Free', overview: 'Legal assistance for eligible women.', applyLink: 'https://wbslsa.bangla.gov.in', tags: ['Women'], eligibility: ['Eligible Women'], benefits: ['Free Lawyer'], documents: ['Identity Proof'] },

{ id: 'legal11', title: 'Free Legal Aid for Senior Citizens', category: 'Legal', state: 'West Bengal', level: 'State', subsidy: 'Free', overview: 'Legal assistance for senior citizens.', applyLink: 'https://wbslsa.bangla.gov.in', tags: ['Senior Citizen'], eligibility: ['Senior Citizens'], benefits: ['Legal Support'], documents: ['Age Proof'] },

{ id: 'legal12', title: 'Free Legal Aid for SC/ST', category: 'Legal', state: 'West Bengal', level: 'State', subsidy: 'Free', overview: 'Legal services for Scheduled Castes and Scheduled Tribes.', applyLink: 'https://wbslsa.bangla.gov.in', tags: ['SC', 'ST'], eligibility: ['SC/ST Citizens'], benefits: ['Legal Assistance'], documents: ['Caste Certificate'] },

{ id: 'legal13', title: 'Free Legal Aid for Persons with Disabilities', category: 'Legal', state: 'West Bengal', level: 'State', subsidy: 'Free', overview: 'Legal assistance for persons with disabilities.', applyLink: 'https://wbslsa.bangla.gov.in', tags: ['Disability'], eligibility: ['PwD'], benefits: ['Free Legal Services'], documents: ['Disability Certificate'] },

{ id: 'legal14', title: 'Child Legal Protection Services', category: 'Legal', state: 'West Bengal', level: 'State', subsidy: 'Free', overview: 'Legal protection and support for children.', applyLink: 'https://wbslsa.bangla.gov.in', tags: ['Child Rights'], eligibility: ['Children'], benefits: ['Legal Protection'], documents: [] },

{ id: 'legal15', title: 'Prison Legal Aid Services', category: 'Legal', state: 'West Bengal', level: 'State', subsidy: 'Free', overview: 'Legal assistance for prisoners and undertrial persons.', applyLink: 'https://wbslsa.bangla.gov.in', tags: ['Prison'], eligibility: ['Prisoners'], benefits: ['Legal Representation'], documents: [] },

{ id: 'legal16', title: 'Consumer Dispute Redressal Commission', category: 'Legal', state: 'West Bengal', level: 'State', subsidy: 'Consumer Protection', overview: 'Forum for resolving consumer disputes.', applyLink: 'https://scdrcwb.in', tags: ['Consumer'], eligibility: ['Consumers'], benefits: ['Consumer Justice'], documents: ['Purchase Proof'] },

{ id: 'legal17', title: 'Online Case Status Service', category: 'Legal', state: 'West Bengal', level: 'State', subsidy: 'Free', overview: 'Check the status of court cases online.', applyLink: 'https://services.ecourts.gov.in', tags: ['Court'], eligibility: ['Everyone'], benefits: ['Case Tracking'], documents: ['Case Number'] },

{ id: 'legal18', title: 'e-Courts Services', category: 'Legal', state: 'India', level: 'Central', subsidy: 'Free', overview: 'Online judicial services including cause list and orders.', applyLink: 'https://ecourts.gov.in', tags: ['Judiciary'], eligibility: ['Everyone'], benefits: ['Court Information'], documents: [] },

{ id: 'legal19', title: 'Online FIR & Citizen Police Services', category: 'Legal', state: 'West Bengal', level: 'State', subsidy: 'Free', overview: 'Citizen police services including complaint and verification services.', applyLink: 'https://wbpolice.gov.in', tags: ['Police'], eligibility: ['Citizens'], benefits: ['Online Police Services'], documents: ['Identity Proof'] },

{ id: 'legal20', title: 'Human Rights Commission Services', category: 'Legal', state: 'West Bengal', level: 'State', subsidy: 'Free', overview: 'Submit complaints related to human rights violations.', applyLink: 'https://wbhrc.nic.in', tags: ['Human Rights'], eligibility: ['Citizens'], benefits: ['Complaint Redressal'], documents: ['Supporting Documents'] },    ],
    
food: [
{ id: 'food1', title: 'Public Distribution System (PDS)', category: 'Food & Nutrition', state: 'West Bengal', level: 'State', subsidy: 'Subsidized Food Grains', overview: 'Provides essential food grains to eligible ration card holders.', applyLink: 'https://food.wb.gov.in', tags: ['Ration', 'Food Security'], eligibility: ['Eligible Ration Card Holders'], benefits: ['Rice', 'Wheat', 'Sugar'], documents: ['Ration Card', 'Aadhaar'] },

{ id: 'food2', title: 'Digital Ration Card Services', category: 'Food & Nutrition', state: 'West Bengal', level: 'State', subsidy: 'Free Online Service', overview: 'Apply, update, download and manage digital ration cards.', applyLink: 'https://food.wb.gov.in', tags: ['Ration Card'], eligibility: ['West Bengal Residents'], benefits: ['Online Ration Services'], documents: ['Aadhaar', 'Address Proof'] },

{ id: 'food3', title: 'Khadya Sathi', category: 'Food & Nutrition', state: 'West Bengal', level: 'State', subsidy: 'Highly Subsidized Food Grains', overview: 'Food security scheme providing subsidized food grains.', applyLink: 'https://food.wb.gov.in', tags: ['Food Security'], eligibility: ['Eligible Families'], benefits: ['Rice', 'Wheat'], documents: ['Ration Card'] },

{ id: 'food4', title: 'Anna Purna Yojana', category: 'Food & Nutrition', state: 'West Bengal', level: 'State', subsidy: 'Free Food Grains', overview: 'Provides free food grains to eligible senior citizens.', applyLink: 'https://food.wb.gov.in', tags: ['Senior Citizen'], eligibility: ['Eligible Senior Citizens'], benefits: ['Free Food Grains'], documents: ['Age Proof', 'Ration Card'] },

{ id: 'food5', title: 'Mid-Day Meal Scheme', category: 'Food & Nutrition', state: 'West Bengal', level: 'State', subsidy: 'Free Nutritious Meal', overview: 'Nutritious meals for students in government and aided schools.', applyLink: 'https://middaymeal.wb.gov.in', tags: ['School Meal'], eligibility: ['School Students'], benefits: ['Free Cooked Meals'], documents: ['School Enrollment'] },

{ id: 'food6', title: 'Integrated Child Development Services (ICDS)', category: 'Food & Nutrition', state: 'West Bengal', level: 'State', subsidy: 'Nutrition Support', overview: 'Nutrition and health services for children and mothers.', applyLink: 'https://wbcdwdsw.gov.in', tags: ['Child Nutrition'], eligibility: ['Children', 'Pregnant Women'], benefits: ['Supplementary Nutrition'], documents: ['Identity Proof'] },

{ id: 'food7', title: 'Anganwadi Services', category: 'Food & Nutrition', state: 'West Bengal', level: 'State', subsidy: 'Free Nutrition', overview: 'Nutrition, preschool education and healthcare through Anganwadi Centres.', applyLink: 'https://wbcdwdsw.gov.in', tags: ['Anganwadi'], eligibility: ['Children', 'Women'], benefits: ['Nutrition', 'Health Services'], documents: [] },

{ id: 'food8', title: 'Supplementary Nutrition Programme', category: 'Food & Nutrition', state: 'West Bengal', level: 'State', subsidy: 'Free Nutrition', overview: 'Supplementary nutrition for children, pregnant and lactating women.', applyLink: 'https://wbcdwdsw.gov.in', tags: ['Nutrition'], eligibility: ['Eligible Beneficiaries'], benefits: ['Nutritious Food'], documents: [] },

{ id: 'food9', title: 'POSHAN Abhiyaan', category: 'Food & Nutrition', state: 'India', level: 'Central', subsidy: 'Nutrition Support', overview: 'National mission to improve nutritional outcomes.', applyLink: 'https://poshanabhiyaan.gov.in', tags: ['Nutrition'], eligibility: ['Children', 'Women'], benefits: ['Nutrition Support'], documents: [] },

{ id: 'food10', title: 'POSHAN Tracker', category: 'Food & Nutrition', state: 'India', level: 'Central', subsidy: 'Free Digital Service', overview: 'Digital platform for monitoring nutrition services.', applyLink: 'https://poshantracker.in', tags: ['Nutrition'], eligibility: ['Beneficiaries'], benefits: ['Service Tracking'], documents: [] },

{ id: 'food11', title: 'Ration Card Application', category: 'Food & Nutrition', state: 'West Bengal', level: 'State', subsidy: 'Free Service', overview: 'Apply online for a new ration card.', applyLink: 'https://food.wb.gov.in', tags: ['Ration'], eligibility: ['Residents'], benefits: ['Online Application'], documents: ['Aadhaar', 'Address Proof'] },

{ id: 'food12', title: 'Ration Card Correction Service', category: 'Food & Nutrition', state: 'West Bengal', level: 'State', subsidy: 'Free Service', overview: 'Update or correct ration card details.', applyLink: 'https://food.wb.gov.in', tags: ['Correction'], eligibility: ['Ration Card Holders'], benefits: ['Online Correction'], documents: ['Supporting Documents'] },

{ id: 'food13', title: 'Ration Card Status Check', category: 'Food & Nutrition', state: 'West Bengal', level: 'State', subsidy: 'Free Service', overview: 'Track ration card application status online.', applyLink: 'https://food.wb.gov.in', tags: ['Status'], eligibility: ['Applicants'], benefits: ['Application Tracking'], documents: ['Application Number'] },

{ id: 'food14', title: 'Fair Price Shop Locator', category: 'Food & Nutrition', state: 'West Bengal', level: 'State', subsidy: 'Free Service', overview: 'Locate nearby fair price ration shops.', applyLink: 'https://food.wb.gov.in', tags: ['Ration Shop'], eligibility: ['Everyone'], benefits: ['Shop Locator'], documents: [] },

{ id: 'food15', title: 'Food Grievance Redressal', category: 'Food & Nutrition', state: 'West Bengal', level: 'State', subsidy: 'Free Service', overview: 'Submit complaints regarding ration and food distribution.', applyLink: 'https://food.wb.gov.in', tags: ['Complaint'], eligibility: ['Citizens'], benefits: ['Complaint Resolution'], documents: [] },

{ id: 'food16', title: 'Mother & Child Nutrition Services', category: 'Food & Nutrition', state: 'West Bengal', level: 'State', subsidy: 'Free Nutrition', overview: 'Nutrition support for pregnant women and young children.', applyLink: 'https://wbcdwdsw.gov.in', tags: ['Mother', 'Child'], eligibility: ['Eligible Women', 'Children'], benefits: ['Nutrition Support'], documents: [] },

{ id: 'food17', title: 'Nutrition Awareness Programme', category: 'Food & Nutrition', state: 'West Bengal', level: 'State', subsidy: 'Free Service', overview: 'Awareness programmes promoting healthy nutrition.', applyLink: 'https://wbcdwdsw.gov.in', tags: ['Awareness'], eligibility: ['Everyone'], benefits: ['Nutrition Education'], documents: [] },

{ id: 'food18', title: 'Anemia Control Programme', category: 'Food & Nutrition', state: 'West Bengal', level: 'State', subsidy: 'Free Health Support', overview: 'Programme for prevention and control of anemia.', applyLink: 'https://wbhealth.gov.in', tags: ['Health', 'Nutrition'], eligibility: ['Women', 'Children'], benefits: ['Iron Supplementation'], documents: [] },

{ id: 'food19', title: 'PM POSHAN Scheme', category: 'Food & Nutrition', state: 'India', level: 'Central', subsidy: 'Free School Meals', overview: 'School nutrition programme providing cooked meals to students.', applyLink: 'https://pmposhan.education.gov.in', tags: ['School Nutrition'], eligibility: ['School Students'], benefits: ['Nutritious Meals'], documents: ['School Enrollment'] },

{ id: 'food20', title: 'One Nation One Ration Card (ONORC)', category: 'Food & Nutrition', state: 'India', level: 'Central', subsidy: 'Portable Ration Facility', overview: 'Enables ration card portability across India.', applyLink: 'https://nfsa.gov.in', tags: ['Ration'], eligibility: ['NFSA Beneficiaries'], benefits: ['Nationwide Ration Access'], documents: ['Aadhaar', 'Ration Card'] },    ],
   
transport: [
        { id: 'transport1', title: 'Student Smart Card', category: 'Transportation', state: 'West Bengal', level: 'State', subsidy: 'Concessional Travel', overview: 'Provides concessional bus fares for eligible students.', applyLink: 'https://transport.wb.gov.in', tags: ['Student', 'Bus'], eligibility: ['School & College Students'], benefits: ['Discounted Bus Fare'], documents: ['Student ID', 'Aadhaar'] },

{ id: 'transport2', title: 'Online Driving Licence Services', category: 'Transportation', state: 'West Bengal', level: 'State', subsidy: 'Online Service', overview: 'Apply, renew and manage driving licence services online.', applyLink: 'https://parivahan.gov.in', tags: ['Driving Licence'], eligibility: ['Eligible Citizens'], benefits: ['Online DL Services'], documents: ['Aadhaar', 'Address Proof'] },

{ id: 'transport3', title: 'Learner Licence Application', category: 'Transportation', state: 'West Bengal', level: 'State', subsidy: 'Online Service', overview: 'Apply online for a learner driving licence.', applyLink: 'https://parivahan.gov.in', tags: ['Learner Licence'], eligibility: ['18+ Years'], benefits: ['Online Application'], documents: ['Aadhaar', 'Age Proof'] },

{ id: 'transport4', title: 'Vehicle Registration Services', category: 'Transportation', state: 'West Bengal', level: 'State', subsidy: 'Online Service', overview: 'Registration and ownership services for motor vehicles.', applyLink: 'https://parivahan.gov.in', tags: ['Vehicle'], eligibility: ['Vehicle Owners'], benefits: ['Vehicle Registration'], documents: ['Invoice', 'Insurance', 'Aadhaar'] },

{ id: 'transport5', title: 'Vehicle Ownership Transfer', category: 'Transportation', state: 'West Bengal', level: 'State', subsidy: 'Online Service', overview: 'Transfer ownership of registered vehicles online.', applyLink: 'https://parivahan.gov.in', tags: ['RC Transfer'], eligibility: ['Vehicle Owners'], benefits: ['Ownership Transfer'], documents: ['RC', 'Insurance', 'Aadhaar'] },

{ id: 'transport6', title: 'Vehicle Fitness Certificate', category: 'Transportation', state: 'West Bengal', level: 'State', subsidy: 'Online Service', overview: 'Apply for vehicle fitness certificate.', applyLink: 'https://parivahan.gov.in', tags: ['Fitness'], eligibility: ['Vehicle Owners'], benefits: ['Fitness Certificate'], documents: ['RC', 'Insurance'] },

{ id: 'transport7', title: 'Permit Application Services', category: 'Transportation', state: 'West Bengal', level: 'State', subsidy: 'Online Service', overview: 'Apply for commercial vehicle permits.', applyLink: 'https://parivahan.gov.in', tags: ['Permit'], eligibility: ['Commercial Vehicle Owners'], benefits: ['Online Permit'], documents: ['RC', 'Insurance'] },

{ id: 'transport8', title: 'Road Tax Payment', category: 'Transportation', state: 'West Bengal', level: 'State', subsidy: 'Online Payment', overview: 'Pay motor vehicle road tax online.', applyLink: 'https://parivahan.gov.in', tags: ['Road Tax'], eligibility: ['Vehicle Owners'], benefits: ['Online Tax Payment'], documents: ['Vehicle Number'] },

{ id: 'transport9', title: 'e-Challan Payment', category: 'Transportation', state: 'West Bengal', level: 'State', subsidy: 'Online Service', overview: 'Check and pay pending traffic challans.', applyLink: 'https://echallan.parivahan.gov.in', tags: ['Traffic'], eligibility: ['Vehicle Owners'], benefits: ['Online Challan Payment'], documents: ['Vehicle Number'] },

{ id: 'transport10', title: 'Vehicle Information Search', category: 'Transportation', state: 'West Bengal', level: 'State', subsidy: 'Free Service', overview: 'Search vehicle registration details online.', applyLink: 'https://parivahan.gov.in', tags: ['Vehicle Info'], eligibility: ['Everyone'], benefits: ['Vehicle Details'], documents: ['Vehicle Number'] },

{ id: 'transport11', title: 'Driving Licence Status', category: 'Transportation', state: 'West Bengal', level: 'State', subsidy: 'Free Service', overview: 'Track driving licence application status.', applyLink: 'https://parivahan.gov.in', tags: ['DL Status'], eligibility: ['Applicants'], benefits: ['Application Tracking'], documents: ['Application Number'] },

{ id: 'transport12', title: 'Vehicle RC Status', category: 'Transportation', state: 'West Bengal', level: 'State', subsidy: 'Free Service', overview: 'Track vehicle registration certificate status.', applyLink: 'https://parivahan.gov.in', tags: ['RC Status'], eligibility: ['Applicants'], benefits: ['Status Tracking'], documents: ['Application Number'] },

{ id: 'transport13', title: 'Online Bus Ticket Booking (SBSTC)', category: 'Transportation', state: 'West Bengal', level: 'State', subsidy: 'Online Service', overview: 'Book South Bengal State Transport Corporation bus tickets online.', applyLink: 'https://sbstc.co.in', tags: ['Bus Ticket'], eligibility: ['Everyone'], benefits: ['Online Booking'], documents: [] },

{ id: 'transport14', title: 'Online Bus Ticket Booking (NBSTC)', category: 'Transportation', state: 'West Bengal', level: 'State', subsidy: 'Online Service', overview: 'Book North Bengal State Transport Corporation bus tickets online.', applyLink: 'https://nbstc.in', tags: ['Bus Ticket'], eligibility: ['Everyone'], benefits: ['Online Booking'], documents: [] },

{ id: 'transport15', title: 'Online Bus Ticket Booking (WBTC)', category: 'Transportation', state: 'West Bengal', level: 'State', subsidy: 'Online Service', overview: 'Book West Bengal Transport Corporation bus tickets online.', applyLink: 'https://wbtc.co.in', tags: ['Bus Ticket'], eligibility: ['Everyone'], benefits: ['Online Booking'], documents: [] },

{ id: 'transport16', title: 'Water Transport Services', category: 'Transportation', state: 'West Bengal', level: 'State', subsidy: 'Passenger Transport', overview: 'Government-operated inland water transport services.', applyLink: 'https://transport.wb.gov.in', tags: ['Ferry'], eligibility: ['Everyone'], benefits: ['Water Transport'], documents: [] },

{ id: 'transport17', title: 'Road Safety Awareness Programme', category: 'Transportation', state: 'West Bengal', level: 'State', subsidy: 'Free Service', overview: 'Promotes road safety and responsible driving.', applyLink: 'https://transport.wb.gov.in', tags: ['Road Safety'], eligibility: ['Everyone'], benefits: ['Safety Awareness'], documents: [] },

{ id: 'transport18', title: 'Commercial Driving Training', category: 'Transportation', state: 'West Bengal', level: 'State', subsidy: 'Training Support', overview: 'Government-supported training for commercial drivers.', applyLink: 'https://transport.wb.gov.in', tags: ['Driver Training'], eligibility: ['Eligible Candidates'], benefits: ['Professional Driver Training'], documents: ['Aadhaar'] },

{ id: 'transport19', title: 'Vahan & Sarathi Services', category: 'Transportation', state: 'India', level: 'Central', subsidy: 'Online Transport Services', overview: 'Integrated online services for vehicle and driving licence management.', applyLink: 'https://parivahan.gov.in', tags: ['Vahan', 'Sarathi'], eligibility: ['Citizens'], benefits: ['Complete Transport Services'], documents: ['As Required'] },

{ id: 'transport20', title: 'National Common Mobility Card (NCMC)', category: 'Transportation', state: 'India', level: 'Central', subsidy: 'Integrated Transit Card', overview: 'One card for multiple public transport services where supported.', applyLink: 'https://www.npci.org.in', tags: ['NCMC', 'Transit Card'], eligibility: ['Citizens'], benefits: ['Cashless Public Transport'], documents: ['Identity Proof'] }, ],
};
    


// ============================================
// CATEGORIES DISPLAY
// ============================================
const categories = [
    { icon: 'fa-graduation-cap', name: 'Education', count: '16 Schemes', color: '#6C3CE1', key: 'education' },
    { icon: 'fa-heart-pulse', name: 'Healthcare', count: '19 Schemes', color: '#FF6B6B', key: 'health' },
    { icon: 'fa-venus-mars', name: 'Women Empowerment', count: '25 Schemes', color: '#EC4899', key: 'women' },
    { icon: 'fa-building', name: 'Housing', count: '19 Schemes', color: '#F59E0B', key: 'housing' },
    { icon: 'fa-hand-holding-dollar', name: 'Financial', count: '20 Schemes', color: '#06D6A0', key: 'financial' },
    { icon: 'fa-briefcase', name: 'Employment', count: '20 Schemes', color: '#3B82F6', key: 'employment' },
    { icon: 'fa-tractor', name: 'Agriculture', count: '20 Schemes', color: '#10B981', key: 'agriculture' },
    { icon: 'fa-scale-balanced', name: 'Legal', count: '20 Schemes', color: '#8B5CF6', key: 'legal' },
    { icon: 'fa-utensils', name: 'Food & Nutrition', count: '20 Schemes', color: '#F472B6', key: 'food' },
    { icon: 'fa-people-arrows', name: 'Skill Development', count: '20 Schemes', color: '#6366F1', key: 'skill' },
    { icon: 'fa-truck', name: 'Transportation', count: '20 Schemes', color: '#14B8A6', key: 'transport' },
    { icon: 'fa-bolt', name: 'Energy', count: '20 Schemes', color: '#F59E0B', key: 'energy' },
    { icon: 'fa-wifi', name: 'Digital India', count: '20 Schemes', color: '#8B5CF6', key: 'digital' },
    { icon: 'fa-tree', name: 'Rural Development', count: '20 Schemes', color: '#10B981', key: 'rural' }
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