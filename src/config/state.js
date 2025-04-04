const educationState = {
  university: '',
  degree: '',
  major: '',
  startDate: '',
  endDate: '',
  description: '',
};

const experienceState = {
  position: '',
  company: '',
  location: '',
  startDate: '',
  endDate: '',
  jobDesc: '',
};

const profileState = {
  firstName: '',
  lastName: '',
  jobTitle: '',
  email: '',
  address: '',
  phone: '',
  summary: '',
  linkedin: '',
};

export const resumeInitialState = {
  user_id: '',
  title: '',
  profile: [profileState],
  education: [educationState],
  workExperience: [experienceState],
};
