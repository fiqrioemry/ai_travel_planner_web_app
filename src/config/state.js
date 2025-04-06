const educationState = {
  university: '',
  degree: '',
  major: '',
  start_date: '',
  end_date: '',
  description: '',
};

const experienceState = {
  position: '',
  company: '',
  location: '',
  start_date: '',
  end_date: '',
  jobDesc: '',
};

const profileState = {
  first_name: '',
  last_name: '',
  job_title: '',
  email: '',
  address: '',
  phone: '',
  summary: '',
  linkedin: '',
};

export const resumeInitialState = {
  user_id: '',
  title: '',
  theme: '',
  profile: profileState,
  education: [educationState],
  work_experience: [experienceState],
};

export const colors = [
  '#FF5733',
  '#33FF57',
  '#3357FF',
  '#FF33A1',
  '#A133FF',
  '#33FFA1',
  '#FF7133',
  '#71FF33',
  '#7133FF',
  '#FF3371',
  '#33FF71',
  '#3371FF',
  '#A1FF33',
  '#33A1FF',
  '#FF5733',
  '#5733FF',
  '#33FF5A',
  '#5A33FF',
  '#FF335A',
  '#335AFF',
];
