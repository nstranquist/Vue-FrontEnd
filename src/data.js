/* eslint-disable semi */
import * as axios from 'axios';
const months = [
  'January', 'February', 'March', 'April',
  'May', 'June', 'July', 'August', 'September',
  'October', 'November', 'December'
]

const genders = [
  'Female',
  'Male',
  'Nonbinary',
  'Transgender',
  '2 - spirit'
]

const military = [
  'Army',
  'Navy',
  'Air Force',
  'Marines',
  'Foreign country military'
]

const currentSchoolYear = [
  'HS Freshmen',
  'HS Sophomore',
  'HS Junior',
  'HS Senior',
  'College Freshmen',
  'College Sophomore',
  'College Junior',
  'College Senior',
  'Graduate Student Year 1',
  'Graduate Student Year 2',
  'Graduate Student Year 3',
  'Graduate Student Year 4',
  'Graduate Student Year 5'
]

const yearScholarshipNeeded = [
  'College Freshmen',
  'College Sophomore',
  'College Junior',
  'College Senior',
  'Graduate Student Year 1',
  'Graduate Student Year 2',
  'Graduate Student Year 3',
  'Graduate Student Year 4',
  'Graduate Student Year 5'
]

const citizenship = [
  'US Citizen',
  'US Permanent Resident',
  'US Conditional Resident',
  'Non-Immigrant'
]

const disabilities = [
  'ADHD',
  'Anxiety disorder',
  'Arachnoiditis',
  'Asperger Syndrome',
  'Asthma',
  'Autism',
  'Bipolar disorder',
  'Brain injuries',
  'Chronic fatigue syndrome',
  'Chronic pain',
  'Circadian rhythm sleep disorders',
  'Coeliac Disease',
  'Crohns disease',
  'Depression',
  'Diabetes',
  'Ehlers Danlos Syndrome',
  'Endometreosis',
  'Epilepsy',
  'Fibromyalgia',
  'Food allergies',
  'Hyperhidrosis',
  'Hypoglycemia',
  'Inflammatory bowel disease',
  'Lupus',
  'Lyme Disease',
  'Major depression',
  'Metabolic syndrome',
  'Multiple Sclerosis',
  'Multiple Chemical Sensitivity',
  'Myasthenia Gravis',
  'Narcolepsy',
  'Personality disorders',
  'Primary immunodeficiency',
  'Psychiatric disabilities',
  'Rheumatoid arthritis',
  'Schnitzlers Syndrome',
  'Schizophrenia',
  'Scleroderma',
  'Spinal Disorders',
  'Temporomandibular joint disorder',
  'Transverse Myelitis',
  'Ulcerative Colitis'
]

// const heritages = []
const gpa = [
  '4.0',
  '3.7',
  '3.3',
  '3.0',
  '2.7',
  '2.3',
  '2.0',
  '1.7',
  '1.3',
  '1.0',
  '0.0'
]
const educationalExperiences = [
  'Alternative High School Student/Graduate',
  'Associates Degree (Received)',
  'Catholic High School Student/Graduate',
  'Community Junior College',
  'Commuter Student',
  'Continuing Education After Interuption Descendant Of Alumni Of Same School',
  'Transfer Students (From 4-Year Schools)',
  'Transfer From Comm. or Junior College',
  'Technical/Vocational School Student/Graduate,',
  'Study Abroad Have Gone To or Intend To',
  'Student/Graduate of a Christian High School (non-denominational)',
  'Student (Non-Traditional)',
  'Part-Time Student',
  'Jesuit High School Student/Graduate',
  'International Baccalaureate Diploma, Received',
  'Independent/Private College and University Attendee',
  'Family- 2 Or More At Same College',
  'First Generation College Student',
  'GED Recipient',
  'Goddard School Pre-K and Kindergarten',
  'HBCU -attending/plan to attend',
  'High School-Did Not Finish',
  'Honor Roll Student'
]

const majors = [
  'Biological Sciences',
  'Pharmacology',
  'Bioinformatics',
  'Biotechnology',
  'Epidemiology',
  'Neuroscience',
  'Biomedical Sciences',
  'Mathematics',
  'Statistics',
  'Computer Science',
  'Behavioral Sciences',
  'Computational Science',
  'Physical Sciences',
  'Astronomy',
  'Astrophysics',
  'Meteorology',
  'Chemistry',
  'Geology',
  'Paleontology',
  'Physics',
  'Forensic Science',
  'Computer Forensics',
  'Archeology',
  'Aeronautics',
  'Cytotechnology',
  'Clinical Laboratory Science',
  'Medical Scientist',
  'Pharmaceutical Sciences',
  'Environmental Health',
  'Business Statistics',
  'Actuarial Science',
  'Animal Sciences',
  'Food Science',
  'Plant Sciences',
  'Environmental Science',
  'Artificial Intelligence',
  'Information Technology',
  'Architectural Engineering',
  'Chemical Engineering',
  'Biochemical Engineering',
  'Engineering Chemistry',
  'Biological Engineering',
  'Biomedical Technology',
  'Robotics Technology',
  'Automation Engineer Technology',
  'Biological Sciences',
  'Pharmacology',
  'Bioinformatics',
  'Biotechnology',
  'Epidemiology',
  'Neuroscience',
  'Biomedical Sciences',
  'Mathematics',
  'Statistics',
  'Computer Science',
  'Behavioral Sciences',
  'Computational Science',
  'Physical Sciences',
  'Astronomy',
  'Astrophysics',
  'Meteorology',
  'Chemistry',
  'Geology',
  'Paleontology',
  'Physics',
  'Forensic Science',
  'Computer Forensics',
  'Archeology',
  'Aeronautics',
  'Cytotechnology',
  'Clinical Laboratory Science',
  'Medical Scientist',
  'Pharmaceutical Sciences',
  'Environmental Health',
  'Business Statistics',
  'Actuarial Science',
  'Animal Sciences',
  'Food Science',
  'Plant Sciences',
  'Environmental Science',
  'Artificial Intelligence',
  'Information Technology',
  'Architectural Engineering',
  'Chemical Engineering',
  'Biochemical Engineering',
  'Engineering Chemistry',
  'Biological Engineering',
  'Biomedical Technology',
  'Robotics Technology',
  'Automation Engineer Technology'
]
const iAmA = [
  'Student',
  'Parnet'
]

const getScholarships = async function () {
  const response = await axios.get('https://us-central1-edurain.cloudfunctions.net/api/scholarships'); // limit 50
  const scholarships = response.data;
  console.log(scholarships);
}
export default {
  months,
  majors,
  genders,
  educationalExperiences,
  military,
  disabilities,
  gpa,
  currentSchoolYear,
  yearScholarshipNeeded,
  citizenship,
  iAmA,
  getScholarships
}
