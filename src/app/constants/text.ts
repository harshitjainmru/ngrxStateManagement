import {
  IAPPRECIATIONDATA,
  IAWARDDATA,
  IBIRTHDAYDATA,
  IDIRECTORY_DATA,
  IGALLERYDATA,
  ILATEST_JOB,
  IPROFILE,
  IPROFILE_USERDETAILS,
  IREFERRAL,
  IWORKANNIVERSARY,
} from '../models/layout-interface';
import { ABS_BASIC_INFO } from './absolute-routes';
import {
  APPRAISAL,
  BASIC,
  CHANGE_PASSWORD,
  DEPARTMENTCHANGE,
  PROFILE_PIC,
  QUALIFICATION,
  SHIFT,
} from './routes';
import {
  ALL_PROJECTS_Heading,
  ALL_PROJECT_TABLE_DATA,
  ATTENDANCE_HEADING,
  ATTENDANCE_TABLEDATA,
  ATTENDANCE_TABLEDATA1,
  DETAIL_HEADING,
  FLOATING_LEAVE_HEADING,
  FLOATING_LEAVE_TABLE_DATA,
  LIST_DSR_DATA,
  LIST_DSR_DETAIL_DATA,
  LIST_DSR_DETAIL_HEADING,
  LIST_DSR_HEADING,
  LIST_TICKET_HEADING,
  MANUAL_TABLE_HEADING,
  PLANNED_DELIVERY_HEADING,
  PROJECT_LIST_DSR_HEADING,
  PUCH_LOG_TABLE_HEADING,
  SUBTOPIC_HEADING,
  SUB_TOPIC_DATA,
  SUB_TOPIC_DATA1,
  TRAINING_TOPIC_DATA,
  TRAINING_TOPIC_DATA1,
  TRAINING_TOPIC_HEADING,
} from './tables';

export const ACCOUNT = {
  COPYRIGHT: '2023 © Appinventiv HR System',
  GOOGLE_BUTTON: 'Sign in with google',
  OFFICIAL_EMAILID: 'Please use your official Email Id',
  CREDENTIAL_BUTTON: 'LOGIN WITH CREDENTIALS',
  EMAIL_LABEL: 'Email',
  EMAIL_PLACEHOLDER: 'Enter your email',
  PASSWORD_LABEL: 'Password',
  PASSWORD_PLACEHOLDER: 'Enter Password',
  FORGOT_PASSWORD: 'Forgot Password?',
  LOGIN: 'Login',
  LOGIN_WITH_GOOGLE: 'LOGIN WITH GOOGLE',
  FORGOT_TITLE: 'Reset Your Password',
  FORGOT_INSTRUCTION: 'We will send you a link to reset password.',
  FORGOT_BUTTON: 'Recover Password',
  BACK_TO_LOGIN: 'back to login',
};

export const SIDENAV = {
  Home_LABEL: 'Home',
  My_Profile_LABEL: 'My Profile',
  Directory_LABEL: 'Directory',
  Enterpreneurship_Program_LABEL: 'Enterpreneurship Program',
  My_Links_LABEL: 'My Links',
  Finance_LABEL: 'Finance',
  Reviews_LABEL: 'Reviews',
  Refer_Friend_LABEL: 'Refer a Friend',
  Freshers_TrainingLABEL: 'Freshers Training',
  Training_LABEL: 'Training',
  Assests_LABEL: 'Assests Inventory',
  Attendance_LABEL: 'Attendance',
  Leave_LABEL: 'Leave',
  Tickets_LABEL: 'Tickets',
  DSR_LABEL: 'DSR',
  Projects_LABEL: 'Projects',
  Expense_LABEL: 'Expense',
  Announcements_LABEL: 'Announcements',
  Travels_LABEL: 'Travels',
  Logout_LABEL: 'Logout',
  Insurance_LABEL: 'Insurance Verification Details',
  CALENDER_LABEL: 'Holiday Calendar 2023 ',
  POLICY_LABEL: 'Policy Documents',
  JOB_OPENING_LABEL: 'Job Openings',
  RECRUITMENT_LABEL: 'Recruitment',
  REFFER_LIST_LABEL: 'Referral List',
  FINANCE_SUBLABEL: 'Salary Slip',
  FINANCE_SUBLABEL_FORM: 'Form 16',
  FINANCE_SUBLABEL_INVESTMENT: 'Investment Declaration',
  REVIEWS_SUBLABEL: 'My Performance',
  RECRUITMENT_SUBLABEL: 'My Interview',
  freshers_training_sublabel: 'My Trainings',
  training_sublabel: 'Upcoming Trainings',
  ongoing_training_sublabel: 'Ongoing Trainings',
  my_training_sublabel: 'My Trainings',
  requested_training_sublabel: 'Requested Trainings',
  assets_inventory_sublabel: 'My Assets inventory',
  request_asset_sublabel: 'Request Asset',
  asset_declaration_sublabel: 'Asset Declaration',
  attendance_calendar_sublabel: 'Attendance Calendar',
  manual_punch_sublabel: 'Manual Punch',
  punch_log_sublabel: 'Punch Log',
  my_leave_sublabel: 'My Leave',
  floating_leave_sublabel: 'Floating Leave',
  tickets_sublabel: 'Tickets',
  dsr_sublabel: 'My DSR',
  food_label: 'Food',
  food_lunch_sublabel: 'Lunch Coupon',
  request_dinner_sublabel: 'Request Dinner',
};

export const LAYOUT = {
  USER_NAME: 'harshit kumar jain',
  HEADER_MENU_LABEL1: 'My Profile',
  HEADER_MENU_LABEL2: 'Change Password',
  HEADER_MENU_LABEL3: 'Sign Out',
  HEADER_BUTTON: 'help',
  HEADER_LAST_LOGIN: 'last login',
  HEADER_LAST_LOGIN_TIME: ' Feb-01-2023 06:48 PM from 172.31.76.182',
  LAYOUT_FOOTER: '2023 © Appinventiv HR System v1.0.6',
  LAYOUT_FOOTER_BUTTON: 'Covid 19 - Desk',
};

export const LAYOUT_HOME = {
  GREETING: 'Hello!',
  USER_NAME: 'harshit kumar jain',
};

export const LAYOUT_MY_PROFILE: IPROFILE[] = [
  { USER_NAME: 'harshit kumar jain' },
  { LABEL: 'Email', TEXT: ' harshit.jain@appinventiv.com' },
  { LABEL: 'Employee ID', TEXT: 'AI1611' },
  { LABEL: 'Designation', TEXT: 'Software Engineer' },
  { LABEL: 'Last Login', TEXT: 'Feb-01-2023 06:48 PM from 172.31.76.182' },
];
export const LAYOUT_MY_PROFILE_USER_INFO: IPROFILE_USERDETAILS[] = [
  {
    icon: 'fa fa-user',
    title: 'Basic Information',
    routerLink: ABS_BASIC_INFO.path,
  },
  { icon: 'fa fa-camera', title: 'Profile Picture', routerLink: PROFILE_PIC },
  { icon: 'fa fa-book', title: 'Qualification', routerLink: QUALIFICATION },
  { icon: 'fas fa-user-clock', title: 'Shift', routerLink: SHIFT },
  { icon: 'fa fa-key', title: 'Change Password ', routerLink: CHANGE_PASSWORD },
  { icon: 'fa fa-thumbs-up', title: ' Appraisal ', routerLink: APPRAISAL },
  { icon:'fa fa-laptop',title:'Department Change', routerLink:DEPARTMENTCHANGE}
];
export const JOB_OPENING = {
  HEADER: 'Latest Job Openings',
  HEADER_BUTTON: 'View All',
};
export const NEW_FAMILY = {
  HEADER: 'New Family Members',
  EMP_NAME: 'harshit kumar jain',
  DESIGNATION: 'software engineer - angular',
};
export const LATEST_JOB_OPENING: ILATEST_JOB[] = [
  {
    id: 1,
    image: '/assets/design.svg',
    LOCATION: 'Noida, UttarPradesh',
    DATE: '03/02/2023',
    HEADING: 'Graphic Designer - Designing Marketing',
    position_title: 'Graphic Designer',
    DEPARTMENT_VALUE: ' Marketing',
    TEXT: 'We are looking for Graphic Designers to create engaging and on-brand graphics for variety of media',
    OPENING_NUMBER_TEXT: 'No. of Openings',
    OPENING_NUMBER: '1',
    JOB_CODE: '#AP0052',
    EXPERIENCE: 'Experience',
    EXPERIENCE_NUMBER: '5 to 9 Years',
    BUTTON_VIEW: 'View Details',
    BUTTON_REFER: 'Refer a Candidate',
  },
  {
    id: 2,
    image: '/assets/react-native.svg',
    LOCATION: 'Noida, UttarPradesh',
    DATE: '03/02/2023',
    HEADING: 'Tech Lead -  REACT JS',
    position_title: 'Tech Lead',
    DEPARTMENT_VALUE: ' REACT JS',
    TEXT: 'We are looking for JavaScript developers  proficient with React.js -  ( Preferred Early Joiners)',
    OPENING_NUMBER_TEXT: 'No. of Openings',
    OPENING_NUMBER: '2',
    JOB_CODE: '#AP0014',
    EXPERIENCE: 'Experience',
    EXPERIENCE_NUMBER: '5 to 9 Years',
    BUTTON_VIEW: 'View Details',
    BUTTON_REFER: 'Refer a Candidate',
  },
  {
    id: 3,
    image: '/assets/design.svg',
    LOCATION: 'Noida, UttarPradesh',
    DATE: '03/02/2023',
    HEADING: 'Graphic Designer - Designing Marketing',
    position_title: 'Graphic Designer',
    DEPARTMENT_VALUE: ' Marketing',
    TEXT: 'We are looking for Graphic Designers to create engaging and on-brand graphics for variety of media',
    OPENING_NUMBER_TEXT: 'No. of Openings',
    OPENING_NUMBER: '1',
    JOB_CODE: '#AP0052',
    EXPERIENCE: 'Experience',
    EXPERIENCE_NUMBER: '5 to 9 Years',
    BUTTON_VIEW: 'View Details',
    BUTTON_REFER: 'Refer a Candidate',
  },
  {
    id: 4,
    image: '/assets/nodejs.svg',
    LOCATION: 'Noida, UttarPradesh',
    DATE: '03/02/2023',
    HEADING: 'Tech Lead - Node.js',
    position_title: 'Tech Lead',
    DEPARTMENT_VALUE: ' Node.js',
    JOB_CODE: '#AP0037',
    TEXT: 'TL has to oversee the technical team and all projects, identify risks & develop work schedules.',
    OPENING_NUMBER_TEXT: 'No. of Openings',
    OPENING_NUMBER: '1',
    EXPERIENCE: 'Experience',
    EXPERIENCE_NUMBER: '5 to 9 Years',
    BUTTON_VIEW: 'View Details',
    BUTTON_REFER: 'Refer a Candidate',
  },
];
export const LATEST_APPINVENTIV = {
  HEADER_VALUE: 'Latest at Appinventiv',
};
export const AWARDS_VALUE = {
  HEADER_VALUE: 'Awards',
  DEAR_VALUE: 'Dear',
  MESSAGE_VALUE: 'Keep spreading your awesomeness. Congratulations!',
  CHEER_VALUE: 'cheers!',
  APPIVENTIV_TEXT: 'Appinventiv',
};
export const BIRTHDAY_VALUE = {
  HEADER_VALUE: 'Birthday celebration',
  DEAR_VALUE: 'Dear',
  MESSAGE_VALUE:
    'On behalf of the entire company I wish you a very happy birthday and send you my best wishes for much happiness in your life.',
  CHEER_VALUE: 'cheers!',
  APPIVENTIV_TEXT: 'Appinventiv',
};
export const WORK_ANNIVERSARY_VALUE = {
  HEADER_VALUE: 'Work Anniversary',
  DEAR_VALUE: 'Dear',
  MESSAGE_VALUE:
    'Wishing you many more years of success, good luck, and joy! On this blissful and charming day of your Corporate anniversary may you continue the journey of achievements with pride! ',
  CHEER_VALUE: 'cheers!',
  APPIVENTIV_TEXT: 'Appinventiv',
};

export const APPRECIATION_DATA: IAPPRECIATIONDATA[] = [
  {
    HEADER_VALUE: 'Appreciation for UStandBy',
    TEXT: 'Hello All,',
    MESSAGE: `With immense pleasure, we would like to take this moment and appreciate Ustandby Team. The team demonstrated outstanding performance and we are happy to announce that the client has appreciated the team's dedication and commitment due to which the project was a great success.`,
    GREET: 'Kudos to the team!',
    BUTTON: 'View More',
    TEAM_MEMBER:
      '@Shubham K @Aditya S @Arjun singh A @Abhishek S @Faisal K @Pankaj C @Sandeep G @Sakshi Bhatia, Rajat Maheshwari, Sanjay Parida and Pankaj Thapliyal',
    HEAD_NAME: 'Surya (Ustandby)',
    HEAD_GREET:
      'Your hard work and diligence is really admirable, keep growing and achieving!',
    APPRECIATION_NAME: 'Ustandby Team',
    IMAGES: '/assets/images/default_male.jpg',
  },
  {
    HEADER_VALUE: 'Appreciation| ABP NEWS',
    DEAR_VALUE: 'Dear',
    TEXT: ' Aashima Anand,',
    MESSAGE: `We would like to congratulate you all on making ABP live. We are aware of the hard work put in by each team member because of which the client is very satisfied, and we are working on future phases of the application and even other projects too. The client is committed to make this application a big success, and it gives me great joy to see that we share the same passion. `,
    GREET:
      'Thank you for all the hard work and commitment. Keep up the excellent work.',
    BUTTON: 'View More',
    HEAD_NAME: 'Dileep Gupta',
    APPRECIATION_NAME: 'Aashima Anand',
    IMAGES: '/assets/images/ASHIMA.jpeg',
  },
  {
    HEADER_VALUE: 'Appreciation for UStandBy',
    TEXT: 'Hello All,',
    MESSAGE: `With immense pleasure, we would like to take this moment and appreciate Ustandby Team. The team demonstrated outstanding performance and we are happy to announce that the client has appreciated the team's dedication and commitment due to which the project was a great success.`,
    GREET: 'Kudos to the team!',
    BUTTON: 'View More',
    TEAM_MEMBER:
      '@Shubham K @Aditya S @Arjun singh A @Abhishek S @Faisal K @Pankaj C @Sandeep G @Sakshi Bhatia, Rajat Maheshwari, Sanjay Parida and Pankaj Thapliyal',
    HEAD_NAME: 'Surya (Ustandby)',
    HEAD_GREET:
      'Your hard work and diligence is really admirable, keep growing and achieving!',
    APPRECIATION_NAME: 'Ustandby Team',
    IMAGES: '/assets/images/default_male.jpg',
  },
  {
    HEADER_VALUE: 'Appreciation| ABP NEWS',
    DEAR_VALUE: 'Dear',
    TEXT: ' Aashima Anand,',
    MESSAGE: `We would like to congratulate you all on making ABP live. We are aware of the hard work put in by each team member because of which the client is very satisfied, and we are working on future phases of the application and even other projects too. The client is committed to make this application a big success, and it gives me great joy to see that we share the same passion. `,
    GREET:
      'Thank you for all the hard work and commitment. Keep up the excellent work.',
    BUTTON: 'View More',
    HEAD_NAME: 'Dileep Gupta',
    APPRECIATION_NAME: 'Aashima Anand',
    IMAGES: '/assets/images/ASHIMA.jpeg',
  },
];
export const AWARDS_EMP_IMAGE_DATA: IAWARDDATA[] = [
  {
    IMAGE: '/assets/images/.jpg',
    EMP_NAME: 'Ashish Pal (AI1802)',
    DESIGNATION: 'Associate Team Lead, MeanStack',
    DATE: 'October,2022',
  },
  {
    IMAGE: '/assets/images/default_female.jpg',
    EMP_NAME: 'Shweta Saxena (AI1320)',
    DESIGNATION: 'Software Engineer, REACT JS',
    DATE: 'October,2022',
  },
  {
    IMAGE: '/assets/images/default_male.jpg',
    EMP_NAME: 'Ashish Pal (AI1802)',
    DESIGNATION: 'Associate Team Lead, MeanStack',
    DATE: 'October,2022',
  },
  {
    IMAGE: '/assets/images/default_male.jpg',
    EMP_NAME: 'Ashish Pal (AI1802)',
    DESIGNATION: 'Associate Team Lead, MeanStack',
    DATE: 'October,2022',
  },
];
export const BIRTHDAY_EMP_IMAGE_DATA: IBIRTHDAYDATA[] = [
  {
    IMAGE: '/assets/images/default_male.jpg',
    EMP_NAME: 'Ashish Pal (AI1802)',
    DESIGNATION: 'Associate Team Lead, MeanStack',
    DATE: 'October,2022',
  },
  {
    IMAGE: '/assets/images/default_male.jpg',
    EMP_NAME: 'Ashish Pal (AI1802)',
    DESIGNATION: 'Associate Team Lead, MeanStack',
    DATE: 'October,2022',
  },
  {
    IMAGE: '/assets/images/default_male.jpg',
    EMP_NAME: 'Ashish Pal (AI1802)',
    DESIGNATION: 'Associate Team Lead, MeanStack',
    DATE: 'October,2022',
  },
  {
    IMAGE: '/assets/images/default_male.jpg',
    EMP_NAME: 'Ashish Pal (AI1802)',
    DESIGNATION: 'Associate Team Lead, MeanStack',
    DATE: 'October,2022',
  },
];
export const WORKANNIVERSARY_EMP_IMAGE_DATA: IWORKANNIVERSARY[] = [
  {
    IMAGE: '/assets/images/default_male.jpg',
    EMP_NAME: 'Ashish Pal (AI1802)',
    DESIGNATION: 'Associate Team Lead, MeanStack',
    DATE: 'October,2022',
  },
  {
    IMAGE: '/assets/images/default_male.jpg',
    EMP_NAME: 'Ashish Pal (AI1802)',
    DESIGNATION: 'Associate Team Lead, MeanStack',
    DATE: 'October,2022',
  },
  {
    IMAGE: '/assets/images/default_male.jpg',
    EMP_NAME: 'Ashish Pal (AI1802)',
    DESIGNATION: 'Associate Team Lead, MeanStack',
    DATE: 'October,2022',
  },
  {
    IMAGE: '/assets/images/default_male.jpg',
    EMP_NAME: 'Ashish Pal (AI1802)',
    DESIGNATION: 'Associate Team Lead, MeanStack',
    DATE: 'October,2022',
  },
];
export const REFERRAL = {
  HEADER: 'OUR REFERRAL BONUS PROGRAM',
  AMOUNT: 'K',
  TEXT: 'Referral Bonus',
  FOR_TEXT: 'For',
  TO_TEXT: 'to',
  YEAR_TEXT: 'Years of experience',
};
export const REFERRAL_DATA: IREFERRAL[] = [
  {
    referralPrice: 11,
    fromYear: 1,
    toYear: 3,
  },
  {
    referralPrice: 21,
    fromYear: 3,
    toYear: 5,
  },
  {
    referralPrice: 41,
    fromYear: 5,
    toYear: 9,
  },
  {
    referralPrice: 51,
    fromYear: 9,
    toYear: 'last',
  },
];
export const GALLER_VALUE = {
  HEADER: 'Appinventiv Gallery',
};

export const Gallery_DATA: IGALLERYDATA[] = [
  {
    IMAGE: '/assets/gallery/award_1674822333816.jpg',
    HEADING: 'Republic Day-2023',
    NUM: 5,
    BUTTON: 'View',
    SUBIMAGE: [
      { IMAGES: '/assets/republic-day/award_1674822333816.jpg' },
      { IMAGES: '/assets/republic-day/award_1674822348103.jpg' },
      { IMAGES: '/assets/republic-day/award_1674822356821.jpg' },
      { IMAGES: '/assets/republic-day/award_1674822361280.jpg' },
      { IMAGES: '/assets/republic-day/award_1674822366389.jpg' },
    ],
  },
  {
    IMAGE: '/assets/gallery/award_1672378171227.jpg',
    HEADING: 'Best Place To Work Award',
    NUM: 5,
    BUTTON: 'View',
    SUBIMAGE: [
      { IMAGES: '/assets/best-place/award_1672378171227.jpg' },
      { IMAGES: '/assets/best-place/award_1672378174176.jpeg' },
      { IMAGES: '/assets/best-place/award_1672378175316.jpg' },
      { IMAGES: '/assets/best-place/award_1672378183848.jpeg' },
    ],
  },
  {
    IMAGE: '/assets/gallery/award_1672292016846.jpg',
    HEADING: 'Christmas Celebration -2022',
    NUM: 5,
    BUTTON: 'View',
    SUBIMAGE: [
      { IMAGES: '/assets/christmas/award_167229202066.jpg' },
      { IMAGES: '/assets/christmas/award_1672292028335.jpg' },
      { IMAGES: '/assets/christmas/award_1672292037579.jpg' },
      { IMAGES: '/assets/christmas/award_1672292037704.jpg' },
    ],
  },
  {
    IMAGE: '/assets/gallery/award_166719426194.jpeg',
    HEADING: 'Diwali Party -2022',
    NUM: 5,
    BUTTON: 'View',
    SUBIMAGE: [
      { IMAGES: '/assets/diwali/award_1667194276825.jpeg' },
      { IMAGES: '/assets/diwali/award_1667194285355.jpeg' },
      { IMAGES: '/assets/diwali/award_1672292329158.jpg' },
      { IMAGES: '/assets/diwali/award_1672292333107.jpg' },
    ],
  },
];

export const BASIC_INFORMATION = {
  BUTTON: 'Save',
  HEADER: 'Basic Information',
  TOTAL_WORK_EXP: 'Total Working Experience',
  RELEVANT_EXP: 'Relevant Experience',
  QUALIFICATION_HEADER: 'Add New Qualification',
  LIST_ALL_QUALIFICATION: 'List All Qualification',
  CHANGE_PASSWORD_HEADER: 'Employee Force Change Password',
  APPRAISAL_HEADER: 'Appraisal Detail',
  SHIFT_HEADER: 'List All Shift',
};
export const PROFILE_PICTURE_VALUE = {
  PROFILE_PIC_HEADER: 'Profile Picture',
  BROWSE_VALUE: 'Browse',
  FORMAT: 'Upload files only: gif,png,jpg,jpeg',
  REMOVE_PIC_VALUE: 'Remove Profile Picture',
  BUTTON_VALUE: BASIC_INFORMATION.BUTTON,
};
export const DEPARTMENT_CHANGE = {
  heading:'Department Change Request',
  label1:'Department',
  label2:'Change To',
  placeholder:'Select department',
  label3:'Reason for change request',
  department_change:['ios','PHP','Node.js','MeanStack','Android','Angular'],
  button:'Submit'

}

export const FORM_LABEL = {
  FIRST_NAME: 'First Name',
  LAST_NAME: 'Last Name',
  DATE_OF_BIRTH: 'Date of Birth',
  GENDER: 'Gender',
  MARITAL_STATUS: 'Marital Status',
  CONTACT: 'Contact Number',
  YEAR: 'Years',
  MONTH: 'Months',
  ADDRESS: 'Address',
  SCHOOL: 'School/University',
  EDUCATION: 'Education Level',
  TIME: 'Time Period',
  LANGUAGE: 'Language',
  PROFESSIONAL_COURSE: 'Professional Courses (if any)',
  DESCRIPTION: 'Description',
  OLD_PASSSW0RD: 'Old Password',
  NEW_PASSWORD: 'New Password',
  CONFIRM_PASSWORD: 'Confirm Password',
  APPRAISAL_CYCLE: 'Appraisal Cycle',
  APPRAISAL_MONTH: 'Appraisal Month',
  PLACEHOLDER_TO: 'to',
};
export const EDUCATION_DROPDOWN = [
  'High School Diploma / GED',
  'B.Tech',
  'M.Tech',
  'BCA',
  'MCA',
  'BBA',
  'MBA',
  'B.Sc.',
  'M.Sc.',
  'BA',
  'MA',
  'Phd',
  'Diloma',
  'B.Sc Animation & Film Making',
];
export const LANGUAGE_DROPDOWN = ['English', 'Hindi'];

export const UPDATE_DIALOG_DATA = {
  header_value: 'Edit Qualification',
  formlabel: FORM_LABEL,
  education_dropdown: EDUCATION_DROPDOWN,
  language: LANGUAGE_DROPDOWN,
  close_button: 'Close',
  submit_button: 'Submit',
};

export const GENDER_INPUT_DROPDOWN = ['Male', 'Female'];

export const MARITAL_DROPDOWN = [
  'Single',
  'Married',
  'Widowed',
  'Divorced or Separated',
];

export const TABLE_DATA_UNAVAILABLE = {
  NO_DATA: 'No data available in table',
};

export const DIRECTORY_VALUE = {
  HEADER_VALUE: 'Employee Directory',
  NAME_LABEL: 'Name',
  NAME_PLACEHOLDER: 'Search by name',
  DEPARTMENT_LABEL: 'Department',
  BUTTON_RESET: 'Reset',
  BUTTON_SEARCH: 'Search',
};
export const DIRECTORY_DROPDOWN_VALUE = [
  'All',
  '.NET',
  'Android',
  'Angular',
  'IOS',
  'HTML',
  'Marketing',
  'Quality Analyst',
  'Node.Js',
  'FINANCE',
];

export const DIRECTORY_EMPLOYEE_DATA: IDIRECTORY_DATA[] = [
  {
    IMAGE: '/assets/images/default_male.jpg',
    EMP_NAME: 'Aahan Verma',
    EMP_DESIGNATION: 'Sr. Software Engineer',
    EMP_TECHNOLOGY: 'Android',
    EMAIL_ICON: 'fas fa-at',
    EMAIL: 'aahan.verma@appinventiv.com',
    BIRTH_ICON: 'fas fa-birthday-cake',
    BIRTH_DATE: '21st',
    BIRTH_MONTH: 'Aug',
  },
  {
    IMAGE: '/assets/images/default_male.jpg',
    EMP_NAME: 'Deepak Yadav',
    EMP_DESIGNATION: 'Software Engineer',
    EMP_TECHNOLOGY: 'Angular',
    EMAIL_ICON: 'fas fa-at',
    EMAIL: ' deepak.yadav@appinventiv.com',
    BIRTH_ICON: 'fas fa-birthday-cake',
    BIRTH_DATE: ' 08th',
    BIRTH_MONTH: 'May',
  },
  {
    IMAGE: '/assets/images/default_male.jpg',
    EMP_NAME: 'Harshit Kumar Jain',
    EMP_DESIGNATION: 'Software Engineer',
    EMP_TECHNOLOGY: 'Angular',
    EMAIL_ICON: 'fas fa-at',
    EMAIL: 'harshit.jain@appinventiv.com',
    BIRTH_ICON: 'fas fa-birthday-cake',
    BIRTH_DATE: '07th',
    BIRTH_MONTH: 'Apr',
  },
  {
    IMAGE: '/assets/images/default_male.jpg',
    EMP_NAME: 'Harshit Bisht',
    EMP_DESIGNATION: 'Software Engineer',
    EMP_TECHNOLOGY: 'Angular',
    EMAIL_ICON: 'fas fa-at',
    EMAIL: 'harshit.bisht@appinventiv.com',
    BIRTH_ICON: 'fas fa-birthday-cake',
    BIRTH_DATE: '10th',
    BIRTH_MONTH: 'May',
  },
  {
    IMAGE: '/assets/images/default_female.jpg',
    EMP_NAME: 'Manisha Rawat',
    EMP_DESIGNATION: ' Quality Analyst',
    EMP_TECHNOLOGY: 'Quality Analyst',
    EMAIL_ICON: 'fas fa-at',
    EMAIL: 'manisha.rawat@appinventiv.com',
    BIRTH_ICON: 'fas fa-birthday-cake',
    BIRTH_DATE: '16th',
    BIRTH_MONTH: 'Nov',
  },
  {
    IMAGE: '/assets/images/default_male.jpg',
    EMP_NAME: 'Ankit Mehrotra',
    EMP_DESIGNATION: 'Sr. Software Engineer ',
    EMP_TECHNOLOGY: 'Angular',
    EMAIL_ICON: 'fas fa-at',
    EMAIL: ' ankit.mehrotra@appinventiv.com',
    BIRTH_ICON: 'fas fa-birthday-cake',
    BIRTH_DATE: '09th',
    BIRTH_MONTH: 'May',
  },
  {
    IMAGE: '/assets/images/default_male.jpg',
    EMP_NAME: 'Harshit Bisht',
    EMP_DESIGNATION: 'Software Engineer',
    EMP_TECHNOLOGY: 'FINANCE',
    EMAIL_ICON: 'fas fa-at',
    EMAIL: 'aakash.bisht@appinventiv.com',
    BIRTH_ICON: 'fas fa-birthday-cake',
    BIRTH_DATE: '06th',
    BIRTH_MONTH: 'Dec',
  },
  {
    IMAGE: '/assets/images/default_male.jpg',
    EMP_NAME: 'Aakash Bisht',
    EMP_DESIGNATION: 'Finance Executive',
    EMP_TECHNOLOGY: 'FINANCE',
    EMAIL_ICON: 'fas fa-at',
    EMAIL: 'aakash.bisht@appinventiv.com',
    BIRTH_ICON: 'fas fa-birthday-cake',
    BIRTH_DATE: '06th',
    BIRTH_MONTH: 'Dec',
  },
  {
    IMAGE: '/assets/images/default_female.jpg',
    EMP_NAME: 'Aarti Verma',
    EMP_DESIGNATION: 'Software Engineer',
    EMP_TECHNOLOGY: 'Node.Js',
    EMAIL_ICON: 'fas fa-at',
    EMAIL: ' aarti.verma@appinventiv.com',
    BIRTH_ICON: 'fas fa-birthday-cake',
    BIRTH_DATE: '17th',
    BIRTH_MONTH: 'Oct',
  },
  {
    IMAGE: '/assets/images/default_male.jpg',
    EMP_NAME: 'Abhishek Kumar Singh',
    EMP_DESIGNATION: 'Team Lead ',
    EMP_TECHNOLOGY: 'IOS',
    EMAIL_ICON: 'fas fa-at',
    EMAIL: ' abhishek.singh@appinventiv.com',
    BIRTH_ICON: 'fas fa-birthday-cake',
    BIRTH_DATE: '18th',
    BIRTH_MONTH: 'Jul',
  },
];

export const ENTREPRENEURSHIP_VALUE = {
  HEADER_VALUE: 'Objective :',
  IDEA_MESSAGE:
    'Share your innovative startup ideas with us, get funding from us and grow on your own. We want to give the young and brilliant ideas some shape and nurture them to the fullest to become potential competitors in the market. Validate your idea, learn and grow from here.',
  ANGEL_INVESTOR_HEADLINE: 'Story about our Angel Investor (AI)',
  NAME: 'Saurabh Singh',
  BUTTON_VALUE: 'Share Your Idea',
  FOUNDED_MESSAGE: `Founded passion driven niche startups where he served many Top Fortune companies & leading brands in making their Mobile Strategy successful as a CEO & Founder of 250+ people company AppStudioz "India's leading mobile app development company" ​(★Acquired in 2014). He also Co-founded TechAhead in 2009 & was founding partner at C&B Electronics.`,
};

export const LIST_DATA1 = [
  'Followed by @NarendraModi Prime Minister of India | @BarackObama Ex-President US | @PiyushGoyal Railway Minister India on Twitter',
  `Listed on INDIA's Top 25 Most Inspiring Startup Stories of 2013 by YourStory`,
  'The Companies he has led have created over 4,000 jobs during his leadership tenure.',
  `In Past, He has built successful companies from startup (Bootstrapped) to multi-million dollar in revenue.`,
];
export const LIST_DATA2 = [
  '16+ years of professional experience of which 11+ years are as Founding Partner of lean startups across diverse domains with an entrepreneurial drive. Always looking to innovate by bringing smart people together.',
  'Passionate for building and scaling businesses',
  'Strong experience in working in ambiguity to solve complex problems. Skilled at designing and executing successful innovative strategies.',
  `Extensive experience in developing many successful products for the entire spectrum of users, from conceptualising the business ideas to preparing product feature road map, from consumer facing front-end to business facing back-end, designing & wire framing with unmatched track record of Success & Performance.`,
];

export const EXPOLRE_VALUE = {
  HEADER: 'Add Pitch',
  CANCEL_BUTTON: 'Cancel',
  SUBMIT_BUTTON: 'Submit',
  MY_DETAIL: 'My Details',
  PITCH_DETAIL: 'Pitch Details',
  NAME_LABEL: 'Name',
  ID_LABEL: 'Employee Id',
  DOB_LABEL: 'Date of birth',
  PITCH_LABEL: 'Pitch Title',
  INDUSTRY_LABEL: 'Industry',
  TYPE_LABEL: 'Type',
  IDEA_LABEL: 'Idea - (Share your idea in brief)',
  PRESENTATION_LABEL:
    'Presentation - (Share your detailed presentation on the idea) (ppt,pdf)',
};
export const MY_PITCH = {
  header_value: 'My Ideas',
};

export const INDUSTRY_DATA = [
  'Select Industry',
  'Industry Domain',
  'Advertising',
  'Agriculture',
  'Analytics',
  'Education',
  'Engineering',
  'Food',
  'Healthcare',
  'Hospitality',
];

export const TYPE_DATA = ['Technical', 'Non-Technical'];
export const REFER_A_CANDIDATE_DIALOG = {
  HEADER_VALUE: 'Refer a Candidate',
  JOB_DETAIL_VALUE: 'Job Details',
  LABEL_DEPARTMENT: 'Department Name',
  LABEL_JOBCODE: 'Job Code',
  LABEL_LOCATION: 'Location',
  LABEL_EXPERIENCE: 'Experience',
  CANDIDATE_VALUE: 'Candidate Details',
  LABEL_JOBLOC: 'Job Location',
  location_data: ['Select Location', 'Noida, Uttar Pradesh'],
  LABEL_CANDIDATE_NAME: 'Candidate Name',
  LABEL_POSITION: 'Position Title',
  PLACEHOLDER_EXPERIENCE: 'Enter Years of experience',
  LABEL_EMAIL: 'Email ID',
  PLACEHOLDER_EMAIL: 'Enter Email ID',
  LABEL_PHONE: 'Phone Number',
  PLACEHOLDER_PHONE: 'Enter Phone Number',
  LABEL_UPLOAD: 'Upload CV (pdf,doc)',
  LABEL_SKILL: 'Skill Set',
  PLACEHOLDER_SKILL: 'Enter Skills',
  BUTTON_CANCEL: 'Cancel',
  BUTTON_SUBMIT: 'Submit',
};

export const REFER_LIST_VALUE = {
  HEADER_VALUE: 'No referrals yet! Checkout current job openings and refer.',
  BUTTON_VALUE: 'Job Openings',
};
export const HELP_DIALOG_VALUE = {
  HEADING_VALUE: 'Please Mail Us',
  QUERY_VALUE: 'For any query regarding HRMS, Please mail us to',
  EMAIL_VALUE: 'hrms-helpdesk@appinventiv.com',
  BUTTON_VALUE: 'OK',
};

export const CONFIRMATION_LOGOUT_VALUE = {
  QUESTION_VALUE: 'Are you sure want to logout ?',
  BUTTON1: 'No',
  BUTTON2: 'Yes',
};
export const MYPERFORMACE_VALUE = {
  BREADCRUMB_VALUE1: 'Home',
  BREADCRUMB_VALUE2: 'Reviews',
  BREADCRUMB_VALUE3: 'Performance',
  AWARDS_VALUE: 'AWARDS',
  HONOURS_VALUE: 'HONOURS',
  NULL_VALUE: 'N/A',
  TILL_NOW_VALUE: 'Till Now',
  JANUARY_LABEL: 'Jan',
  EMPLOYEE_NAME: 'Harshit Kumar Jain',
  EMPLOYEE_DESIGNATION: 'Software Engineer (Angular)',
  TECHNICAL_LABEL: 'Technical Skills',
  OWNERSHIP_LABEL: 'Ownership of Delivery',
  TEAMWORK_LABEL: 'Teamwork',
  PROCESS_LABEL: 'Process Adherence',
  YEAR_SHORTFORM: 'YRS',
  button: 'Monthly Rating',
  calendar: 'Monthly Performance Calendar',
  select_year: 'Select Year  : ',
  reviewData: [
    {
      year: 2022,
      monthlyRating: [
        { month: 'January', isRating: false },
        { month: 'February', isRating: false },
        { month: 'March', isRating: false },
        { month: 'April', isRating: false },
        { month: 'May', isRating: false },
        { month: 'June', isRating: false },
        {
          month: 'July',
          isRating: true,
          rating: 4.0,
          Awards: 0,
          Honour: 0,
          award_title: 'AWARDS:',
          honour_title: 'HONOURS:',
          technical_rating: 4,
          ownership_rating: 5,
          teamWork_rating: 4,
          process_rating: 4,
        },
        { month: 'August', isRating: false },
        {
          month: 'September',
          isRating: true,
          rating: 4.0,
          Awards: 0,
          Honour: 0,
          award_title: 'AWARDS:',
          honour_title: 'HONOURS:',
          technical_rating: 5,
          ownership_rating: 4,
          teamWork_rating: 4,
          process_rating: 4,
        },
        { month: 'October', isRating: false },
        { month: 'November', isRating: false },
        { month: 'December', isRating: false },
      ],
    },
    {
      year: 2023,
      monthlyRating: [
        { month: 'January', isRating: false },
        { month: 'February', isRating: false },
        { month: 'March', isRating: false },
        { month: 'April', isRating: false },
        { month: 'May', isRating: false },
        { month: 'June', isRating: false },
        { month: 'July', isRating: false },
        { month: 'August', isRating: false },
        { month: 'September', isRating: false },
        { month: 'October', isRating: false },
        { month: 'November', isRating: false },
        { month: 'December', isRating: false },
      ],
    },
  ],
  project_name: 'PROJECT NAME: ',
  project_tech: 'Training Project React JS',
  reviewed_by: 'REVIEWED BY: ',
  pm_name: 'Rabban Ahmad (Project Manager)',
};

export const JOB_DETAILS = {
  breadcrumb_value1: 'Home',
  breadcrumb_value2: 'Job Openings',
  breadcrumb_value3: 'Details',
  job_deatils_value: 'Job Details',
  job_tilte: 'Job Title',
  job_type: 'Job Type',
  department: 'department',
  location: 'Location',
  noofopenings: 'No. of Openings ',
  expRequired: 'Exp. Required',
  technicalskills: 'Technical Skills',
  jobIntroduction: 'Job Introduction',
  jobDescription: 'Job Description',
  requirements: 'Requirements ',
  shouldhave: 'Should have',
  jobQualification: 'Job Qualification',
  educationExp: 'Education and Experience',
  menu: ['Edit Job Details', 'View Applicants'],
};

export const JOB_DETAILS_DATA = [
  {
    id: 4,
    title_name: 'Tech Lead',
    type_name: 'Permanent',
    department_name: 'Node.js',
    location_name: 'Noida, Uttar Pradesh',
    opening: 5,
    experience: '5 to 9 Years ',
    heading_referal: 'Referral bonus will be',
    bonus_amount: 'Rs.5000',
    more_info: 'for more information read',
    termsAndComditions: ' Terms & Conditions',
    skills: ['NodeJS', 'Javascript', 'Mongodb'],
    job_intro_value: 'Urgent Requirement For Backend Architect - Node.js.',
    job_requirements: [
      ' At least 6 to 7 years of experience in developing and deploying large-scale enterprise applications in varied technologies (ranging from PHP, Node.js, Python to Java, J2EE, etc.) with an active user base of over 3-5 million.',
      'Hands-on experience on frontend technologies like ReactJS, Angular 2/4/5, and Bootstrap will be an advantage',
      ' At least 6 to 7 years of experience in developing and deploying large-scale enterprise applications in varied technologies (ranging from PHP, Node.js, Python to Java, J2EE, etc.) with an active user base of over 3-5 million.',
      'Hands-on experience on frontend technologies like ReactJS, Angular 2/4/5, and Bootstrap will be an advantage',
      ' At least 6 to 7 years of experience in developing and deploying large-scale enterprise applications in varied technologies (ranging from PHP, Node.js, Python to Java, J2EE, etc.) with an active user base of over 3-5 million.',
      'Hands-on experience on frontend technologies like ReactJS, Angular 2/4/5, and Bootstrap will be an advantage',
      ' At least 6 to 7 years of experience in developing and deploying large-scale enterprise applications in varied technologies (ranging from PHP, Node.js, Python to Java, J2EE, etc.) with an active user base of over 3-5 million.',
      'Hands-on experience on frontend technologies like ReactJS, Angular 2/4/5, and Bootstrap will be an advantage',
    ],
    shouldHaveValue: [
      '   Knowledge of the latest technology trends in Databases, Web services, and Big data',
      'Capability to reason about the complexity of algorithms (time and space) and code (cyclomatic)',
      ' A will to function in a support capacity, including on-call rotation, DR support, expiration, and emergency.',
    ],
    qualificationValue: [
      'Bachelor’s degree in Computer Science or a related discipline or an equivalent combination of education and work experience.',
      'Overall 7-10 years of solid, diverse work experience in the software industry',
    ],
  },
  {
    id: 2,
    title_name: 'Tech Lead',
    type_name: 'Permanent',
    department_name: 'React.js',
    location_name: 'Noida, Uttar Pradesh',
    opening: 5,
    experience: '5 to 9 Years ',
    heading_referal: 'Referral bonus will be',
    bonus_amount: 'Rs.5000',
    more_info: 'for more information read',
    termsAndComditions: ' Terms & Conditions',
    skills: ['ReactJS', 'Javascript'],
    job_intro_value:
      'We are looking for JavaScript developers proficient with React.js - ( Preferred Early Joiners)',
    job_requirements: [
      ' At least 6 to 7 years of experience in developing and deploying large-scale enterprise applications in varied technologies (ranging from PHP, Node.js, Python to Java, J2EE, etc.) with an active user base of over 3-5 million.',
      'Hands-on experience on frontend technologies like ReactJS, Angular 2/4/5, and Bootstrap will be an advantage',
      ' At least 6 to 7 years of experience in developing and deploying large-scale enterprise applications in varied technologies (ranging from PHP, Node.js, Python to Java, J2EE, etc.) with an active user base of over 3-5 million.',
      'Hands-on experience on frontend technologies like ReactJS, Angular 2/4/5, and Bootstrap will be an advantage',
      ' At least 6 to 7 years of experience in developing and deploying large-scale enterprise applications in varied technologies (ranging from PHP, Node.js, Python to Java, J2EE, etc.) with an active user base of over 3-5 million.',
      'Hands-on experience on frontend technologies like ReactJS, Angular 2/4/5, and Bootstrap will be an advantage',
      ' At least 6 to 7 years of experience in developing and deploying large-scale enterprise applications in varied technologies (ranging from PHP, Node.js, Python to Java, J2EE, etc.) with an active user base of over 3-5 million.',
      'Hands-on experience on frontend technologies like ReactJS, Angular 2/4/5, and Bootstrap will be an advantage',
    ],
    shouldHaveValue: [
      '   Knowledge of the latest technology trends in Databases, Web services, and Big data',
      'Capability to reason about the complexity of algorithms (time and space) and code (cyclomatic)',
      ' A will to function in a support capacity, including on-call rotation, DR support, expiration, and emergency.',
    ],
    qualificationValue: [
      'Bachelor’s degree in Computer Science or a related discipline or an equivalent combination of education and work experience.',
      'Overall 7-10 years of solid, diverse work experience in the software industry',
    ],
  },
  {
    id: 1,
    title_name: 'Graphic Designer',
    type_name: 'Permanent',
    department_name: 'Marketing',
    location_name: 'Noida, Uttar Pradesh',
    opening: 5,
    experience: '5 to 9 Years ',
    heading_referal: 'Referral bonus will be',
    bonus_amount: 'Rs.5000',
    more_info: 'for more information read',
    termsAndComditions: ' Terms & Conditions',
    skills: ['Graphic Designing'],
    job_intro_value:
      'We are looking for Graphic Designers to create engaging and on-brand graphics for variety of media.',
    job_requirements: [
      ' At least 6 to 7 years of experience in developing and deploying large-scale enterprise applications in varied technologies (ranging from PHP, Node.js, Python to Java, J2EE, etc.) with an active user base of over 3-5 million.',
      'Hands-on experience on frontend technologies like ReactJS, Angular 2/4/5, and Bootstrap will be an advantage',
      ' At least 6 to 7 years of experience in developing and deploying large-scale enterprise applications in varied technologies (ranging from PHP, Node.js, Python to Java, J2EE, etc.) with an active user base of over 3-5 million.',
      'Hands-on experience on frontend technologies like ReactJS, Angular 2/4/5, and Bootstrap will be an advantage',
      ' At least 6 to 7 years of experience in developing and deploying large-scale enterprise applications in varied technologies (ranging from PHP, Node.js, Python to Java, J2EE, etc.) with an active user base of over 3-5 million.',
      'Hands-on experience on frontend technologies like ReactJS, Angular 2/4/5, and Bootstrap will be an advantage',
      ' At least 6 to 7 years of experience in developing and deploying large-scale enterprise applications in varied technologies (ranging from PHP, Node.js, Python to Java, J2EE, etc.) with an active user base of over 3-5 million.',
      'Hands-on experience on frontend technologies like ReactJS, Angular 2/4/5, and Bootstrap will be an advantage',
    ],
    shouldHaveValue: [
      '   Knowledge of the latest technology trends in Databases, Web services, and Big data',
      'Capability to reason about the complexity of algorithms (time and space) and code (cyclomatic)',
      ' A will to function in a support capacity, including on-call rotation, DR support, expiration, and emergency.',
    ],
    qualificationValue: [
      'Bachelor’s degree in Computer Science or a related discipline or an equivalent combination of education and work experience.',
      'Overall 7-10 years of solid, diverse work experience in the software industry',
    ],
  },
  {
    id: 3,
    title_name: 'Graphic Designer',
    type_name: 'Permanent',
    department_name: 'Marketing',
    location_name: 'Noida, Uttar Pradesh',
    opening: 5,
    experience: '5 to 9 Years ',
    heading_referal: 'Referral bonus will be',
    bonus_amount: 'Rs.5000',
    more_info: 'for more information read',
    termsAndComditions: ' Terms & Conditions',
    skills: ['Graphic Designing'],
    job_intro_value:
      'We are looking for Graphic Designers to create engaging and on-brand graphics for variety of media.',
    job_requirements: [
      ' At least 6 to 7 years of experience in developing and deploying large-scale enterprise applications in varied technologies (ranging from PHP, Node.js, Python to Java, J2EE, etc.) with an active user base of over 3-5 million.',
      'Hands-on experience on frontend technologies like ReactJS, Angular 2/4/5, and Bootstrap will be an advantage',
      ' At least 6 to 7 years of experience in developing and deploying large-scale enterprise applications in varied technologies (ranging from PHP, Node.js, Python to Java, J2EE, etc.) with an active user base of over 3-5 million.',
      'Hands-on experience on frontend technologies like ReactJS, Angular 2/4/5, and Bootstrap will be an advantage',
      ' At least 6 to 7 years of experience in developing and deploying large-scale enterprise applications in varied technologies (ranging from PHP, Node.js, Python to Java, J2EE, etc.) with an active user base of over 3-5 million.',
      'Hands-on experience on frontend technologies like ReactJS, Angular 2/4/5, and Bootstrap will be an advantage',
      ' At least 6 to 7 years of experience in developing and deploying large-scale enterprise applications in varied technologies (ranging from PHP, Node.js, Python to Java, J2EE, etc.) with an active user base of over 3-5 million.',
      'Hands-on experience on frontend technologies like ReactJS, Angular 2/4/5, and Bootstrap will be an advantage',
    ],
    shouldHaveValue: [
      '   Knowledge of the latest technology trends in Databases, Web services, and Big data',
      'Capability to reason about the complexity of algorithms (time and space) and code (cyclomatic)',
      ' A will to function in a support capacity, including on-call rotation, DR support, expiration, and emergency.',
    ],
    qualificationValue: [
      'Bachelor’s degree in Computer Science or a related discipline or an equivalent combination of education and work experience.',
      'Overall 7-10 years of solid, diverse work experience in the software industry',
    ],
  },
];

export const CONDITION_REWARD_DIALOG_VALUE = {
  headerValue: 'Additional condition for rewards',
  points: [
    'Bonus will be paid out once the referred candidate completes 3 months with the organization.',
    'There is no cap on the number of referrals an employee can make. Every single hiring will make you eligible and all bonus will be paid accordingly.',
    'If two or more employees refer the same candidate, only the first referrer will receive their bonus rewards.',
    'Referral policy is applicable only on 1+ year of experience candidate.',
    'Only permanent employees of Appinventiv will be eligible for referral amounts.',
  ],
};

export const INTERVIEW_LIST = {
  header_value: 'List All Candidates',
  department_label: 'Department',
  status_label: 'Status',
  status: ['Selected Status', 'Selected', 'Rejected', 'Missed', 'In Progress'],
  departemnt: [
    'Select Department',
    '.NET',
    'Android',
    'Angular',
    'IOS',
    'HTML',
    'Marketing',
    'Quality Analyst',
    'Node.Js',
    'FINANCE',
  ],
};

export const FRESHER_TRAINING_DATA = {
  headerValue: 'Trainings',
  label1: 'Start Date',
  label2: 'End Date',
  label3: 'Mode',
  buttonView: 'View Details',
  buttonFeedback: 'Feedback',
  cardData: [
    {
      id: 1,
      title: 'Angular Training Feb- 2022',
      completeHeading: 'Completed',
      label1Data: 'Feb-28-2022',
      label2Data: 'Apr-02-2022',
      label3Data: 'Online',
      departmentData: 'Angular',
      breadcrumb_value1: 'Home',
      breadcrumb_value2: 'My Trainings ',
      breadcrumb_value3: 'Details',
      button1: 'Training Details',
      button2: 'Sub-Topics',
      button3: 'Attendance',
    },
    {
      id: 2,
      title: 'HTML/CSS/UI',
      completeHeading: 'Completed',
      label1Data: 'Feb-14-2022',
      label2Data: 'Feb-25-2022',
      label3Data: 'Offline',
      departmentData: 'Angular',
      breadcrumb_value1: 'Home',
      breadcrumb_value2: 'My Trainings ',
      breadcrumb_value3: 'Details',
      button1: 'Training Details',
      button2: 'Sub-Topics',
      button3: 'Attendance',
    },
  ],
};
export const FEEDBACK_fORM_DATA = {
  headerValue: 'Training feedback form',
  titleLabel: 'Title :',
  departmentLabel: 'Department :',
  startDate: 'Start date :',
  endDate: 'End date :',
  question1:
    'Do you feel that the objective/goal of the training has been fulfilled? *',
  yesLabel: 'Yes',
  noLabel: 'No',
  missingQuestion: 'What is missing? *',
  question2: 'How relevant and helpful do you think it was for your job? *',
  question3: 'How would you rate the overall training? *',
  question4: 'How satisfied were you with the session content? *',
  readMaterial: '(Both presented and pre-read material)',
  question5: 'Any overall feedback for the training? *',
  notvery: 'Not very',
  veryMuch: 'Very much',
  notGood: 'Not Good',
  excellent: 'Excellent',
  poor: 'Poor',
  placeholderOverallFeedback: 'Type your answer here',
  cancel_button: 'Cancel',
  submit_button: 'Submit',
};
export const COVID19_DATA = {
  title: 'Need Help!',
  lockdown_issue:
    'Let us know if you are facing any issue because of the lockdown, We will be giving our best to take care of your problems, Please fill the form below and provide the required details, Concerned person will get in touch with you on the earliest.',
  label1: 'Title',
  label2: 'Mobile No.',
  label3: 'Address',
  label4: 'Description',
  cancel_button: 'Cancel',
  submit_button: 'Submit',
  covid_precaution_advice: [
    {
      title: 'Wear a mask',
      description: `Face masks, gloves and other protective gear can help stop the spread of coronavirus.
  Wearing a mask doesn’t imply that you disregard social distancing. In addition to social distancing, keep proper hygiene, especially, when you touch your mask.`,
    },
    {
      title: 'Wash ‘Em, Wash ‘Em Good ',
      description: `Good hand washing is the first line of defense to stay safe from Covid-19. Respiratory viruses like Coronavirus spreads when the virus gets into your body through your eyes, throat, or nose. Most often, it happens through your hands.`,
    },
    {
      title: 'Telemedicine consultation ',
      description: `Consult doctors or certified medical practitioners remotely and reduce the risk of transmission. Telemedicine consultation is the best alternative for steady and quick medical services.`,
    },
    {
      title: 'Fight the virus ',
      description: `Take simple and constructive steps to help fight the spread of Coronavirus like stay at home, wash hands often, wear masks, maintain social distancing and practice respiratory hygiene.`,
    },
  ],
};

export const TRAINING_DETAILS = [
  {
    id: 1,
    training_label: 'Training Details',
    title_label: 'Title :',
    title_data: 'Angular Training Feb- 2022',
    start_date_label: 'Start dates :',
    start_date_data: 'Feb-28-2022',
    end_date_label: 'End dates :',
    end_date_data: 'Apr-02-2022',
    mode_label: 'Training mode :',
    mode_data: 'Online',
    batch_label: 'Batch :',
    batch_data: 'Feb-2022',
    description_label: 'Description',
    description_data: 'Angular Training Feb- 2022 - Uploaded from sheet',
    topic_label: 'Topics',
    table_heading: TRAINING_TOPIC_HEADING,
    table_data: TRAINING_TOPIC_DATA,
  },
  {
    id: 2,
    training_label: 'Training Details',
    title_label: 'Title :',
    title_data: 'HTML/CSS/UI',
    start_date_label: 'Start dates :',
    start_date_data: 'Feb-14-2022',
    end_date_label: 'End dates :',
    end_date_data: 'Feb-25-2022',
    mode_label: 'Training mode :',
    mode_data: 'Offline',
    batch_label: 'Batch :',
    batch_data: 'Feb-2022',
    description_label: 'Description',
    description_data: 'HTML/CSS/UI - Uploaded from sheet',
    topic_label: 'Topics',
    table_heading: TRAINING_TOPIC_HEADING,
    table_data: TRAINING_TOPIC_DATA1,
  },
];
export const SUBTOPIC_DATA = [
  {
    id: 1,
    subtopic_label: 'Sub Topics',
    table_heading: SUBTOPIC_HEADING,
    table_data: SUB_TOPIC_DATA,
  },
  {
    id: 2,
    subtopic_label: 'Sub Topics',
    table_heading: SUBTOPIC_HEADING,
    table_data: SUB_TOPIC_DATA1,
  },
];
export const ATTENDANCE_DATA = [
  {
    id: 1,
    attendance_label: 'Attendance',
    table_heading: ATTENDANCE_HEADING,
    table_data: ATTENDANCE_TABLEDATA,
  },
  {
    id: 2,
    attendance_label: 'Attendance',
    table_heading: ATTENDANCE_HEADING,
    table_data: ATTENDANCE_TABLEDATA1,
  },
];

export const ONGOING_TRAININGS_DATA = {
  header_value: 'Ongoing Trainings',
  title: 'No Ongoing trainings for now',
};

export const UPCOMING_TRAINING_DATA = {
  headerValue: 'Upcoming Trainings',
  headerValue2: 'My Trainings',
  whocanattend: 'Who can attend',
  label1: 'Start Date',
  label2: 'End Date',
  label3: 'Seats',
  mode: 'Mode',
  buttonView: 'View Details',
  buttonEnrollment: 'Cancel Enrollment',
  requestButton: '+ Request for training',
  cardData: [
    {
      id: 1,
      title: 'Micro Frontend Angular',
      completeHeading: 'Enrolled',
      whoattenddata: 'Angular',
      label1Data: 'Jan-05-2023',
      label2Data: 'Jan-05-2023',
      label3Data: '41',
      mode_data: 'Online',
    },
  ],
};

export const CANCEL_ENROLLMENT_DIALOG_DATA = {
  headerValue: 'Cancel Enrollment',
  alert_instruction:
    'After cancelling this enrollment you can re-enroll one time only.',
  label_value: 'Please provide brief reason *',
  placeholder_value: 'Enter Detail Reason',
  buttonCancel: 'Cancel',
  buttonSubmit: 'Submit',
};

export const TRAINING_DETAILS_UPCOMING = [
  {
    id: 1,
    breadcrumb_value1: 'Home',
    breadcrumb_value2: 'Trainings',
    breadcrumb_value3: 'Training Details',
    title: 'Micro Frontend Angular',
    buttonEnrollment: 'Cancel Enrollment',
    proposed_button: 'Proposed',
    title_label: 'Title :',
    trainingduration: 'Training duration :',
    date: 'Training dates :',
    mode: 'Training mode :',
    attend: 'Who can attend :',
    seats: 'No. of seats :',
    duration_data: '1 Hrs',
    data_data: 'Jan-05-2023 - Jan-05-2023',
    mode_data: 'Online',
    seat_data: '55',
    attendTeam: 'Angular',
    description_label: 'Description',
    description_data:
      'Micro Frontends is to think about a website or web app as a composition of features which are owned by independent teams. Each team has a distinct area of business or mission it cares about and specialises in. A team is cross functional and develops its features end-to-end, from database to user interface.',
    support_label: 'Support details',
    support_data: 'This is online training, so no support required.',
  },
];

export const REQUEST_TRAINING_DATA = {
  header_value: 'Request for training',
  training_name_label: 'Training name',
  team_name_label: 'Team name',
  skill_enhancement:
    'Please mention the training/learning area’s you feel can be beneficial for your skill enhancement and job performance *',
  skill_needed_label:
    'Why do you feel these skills are needed and how they will benefit your personal and organizational needs *',
  placeholder: 'Type your answer here',
  interest_given_training: 'Are you interested to give the Trainings? *',
  timeline: 'What should be the timeline to conduct this training? *',
  buttonCancel: 'Cancel',
  buttonSubmit: 'Submit',
  yesLabel: 'Yes',
  noLabel: 'No',
  immediateLabel: 'Immediate',
  months: '3-6 Months',
  more_months: 'More than 6 Months',
  training_name_data: ['Micro Frontend Angular'],
  team_name_data: ['.net', 'angular', 'android', 'html', 'finance'],
};
export const ASSETS_DATA = {
  assets_inventory_title: 'List All Assets inventory',
};
export const REQUEST_ASSETS_DATA = {
  assets_inventory_title: 'List All Request Assets',
  button_asset_request: ' Add new asset request',
  category_label: 'Assets Categories',
  category_data: ['Laptop', 'Desktop', 'Mobile'],
  quantity_label: 'Quantity',
  quantity_data: ['1', '2', '3', '4', '5'],
  priority_label: 'Priority',
  priority_data: ['Low', 'Medium', 'High'],
  require_date_label: 'Required by Date',
  type_label: 'Allocation type',
  type_data: ['Permanent', 'Temporary'],
  reason_label: 'Request Reason',
  submit_button: 'Submit',
};
export const DECLARATION_ASSETS_DATA = {
  assets_inventory_title: 'List All Declaration Assets',
  button_asset_request: ' Add new assets declaration',
  id_label: 'Employee Id',
  id: 'AI1611',
  code_label: 'Unique Asset Code',
  serial_label: 'Serial Number',
  model_label: 'Model Number ',
  os_label: 'OS',
  os_data: ['Android', 'IOS'],
  os_version_label: 'OS version',
  brand_label: 'Brand',
  color_label: 'Colour',
  work_condition_label: 'Device is in working condition?',
  work_condition_data: ['Yes', 'No'],
  asset_image_label:
    'Asset Image(Allowed Format: jpg,jpeg,JPEG,JPG,png,PNG,GIF)',
  instruction_label: 'Upload front and backside image*',
  submit_button: 'Submit',
};

export const MANUAL_PUNCH_DATA = {
  employee_title: 'Employee Detail',
  puch_request_label: 'Punch Request',
  company_label: 'Company',
  employee_label: 'Employee',
  company_data: ['Appinventiv Technology'],
  manual_title: 'Manual Punch List',
  add_new_button: 'Add New',
  table_heading: MANUAL_TABLE_HEADING,
};
export const PUNCH_LOG_DATA = {
  punch_title: 'Punch Log',
  date_label: 'Date',
  company_label: 'Company',
  company_data: ['Appinventiv Technology'],
  get_button: 'Get',
  table_heading: PUCH_LOG_TABLE_HEADING,
};
export const MY_LEAVE_DATA = {
  leave_data: [
    {
      leave_title: 'Planned Leave (CL) (6.00)',
      leave_balance: 'Planned Leave (CL) Balance (6)',
    },
    {
      leave_title: 'Privileged Leave (5.50)',
      leave_balance: 'Privileged Leave Balance (5.5)',
    },
    {
      leave_title: 'Emergency Leave (CL) (6.00)',
      leave_balance: 'Emergency Leave (CL) Balance (6)',
    },
    {
      leave_title: 'Short Leaves (2/10.00)',
      leave_balance: 'Short Leaves Balance (8)',
    },
  ],
  add_leave: 'Add Leave',
  add_button: 'Add New',
  type_label: 'Leave Type',
  half_day_label: 'Half Day?',
  start_date_label: 'Start Date',
  end_date_label: 'End Date',
  remarks_label: 'Remarks',
  upload_label: 'Upload Document',
  reason_label: 'Leave Reason',
  save_button: 'Save',
  cancel_button: 'Cancel',
  start_time_label: 'Start Time',
  start_time_data: [
    { id: 1, value: '10:00 AM' },
    { id: 2, value: '11:00 AM' },
    { id: 3, value: '12:00 PM' },
    { id: 4, value: '01:00 PM' },
    { id: 5, value: '02:00 PM' },
    { id: 6, value: '03:00 PM' },
    { id: 7, value: '04:00 PM' },
    { id: 8, value: '05:00 PM' },
  ],
  end_time_label: 'End Time',
  end_time_data: [
    { id: 1, value: '12:00 PM' },
    { id: 2, value: '01:00 PM' },
    { id: 3, value: '02:00 PM' },
    { id: 4, value: '03:00 PM' },
    { id: 5, value: '04:00 PM' },
    { id: 6, value: '05:00 PM' },
    { id: 7, value: '06:00 PM' },
    { id: 8, value: '07:00 PM' },
  ],
  type_dropdown_data: [
   'Planned Leave (CL)',
     'Privileged Leave',
    'Emergency Leave (CL)', 'Short Leaves',  'All Remaining Leaves (17.5)'
  ],
  all_leave_instruction: [
    '*You can apply minimum 7 Leaves and Maximum 20 Leaves as per availability of leaves.',
    '*This leave can only be used in case of medical emergency or any pre approved long leave. (Due to some urgency)',
  ],
  list_leave: 'List All Leave',
};
export const FLOATING_LEAVE_DATA = {
  floating_title: 'Floating Leave',
  availed_floating_label: 'Availed Floating Holiday',
  table_heading: FLOATING_LEAVE_HEADING,
  table_data: FLOATING_LEAVE_TABLE_DATA,
};

export const TICKET_DATA = {
  header_value: 'Create New Ticket',
  add_button: 'Add New',
  subject_label: 'Subject',
  department_label: 'Department',
  category_label: 'Ticket Category',
  priority_label: 'Priority',
  description_label: 'Ticket Description',
  department_data: ['Admin', 'IT'],
  category_data: ['Hello'],
  priority_data: ['High', 'Low', 'Normal'],
  saveButton: 'Save',
  list_ticket: 'List All Tickets',
  table_heading: LIST_TICKET_HEADING,
  table_data: [],
};
export const DSR_DATA = {
  header_value: 'Create New DSR',
  add_button: 'Add',
  project_label: 'Project',
  project_data: ['Training Project React JS', 'Miscellaneous', 'Interview'],
  date_label: 'Date',
  hour_label: 'Estimated Hour',
  no_work_label: 'No Work Done',
  description_label: 'Description',
  from_date_label: 'From Date',
  end_date_label: 'End Date',
  status_label: 'Submission Status',
  status_data: ['All', 'Submitted', 'Due'],
  filter_project_data: ['All', 'Training Project React JS'],
  approval_status_label: 'Final Approval Status',
  approval_status_data: ['All', 'Pending', 'Approved', 'Rejected'],
  hours_label: 'Hours',
  noWork_Editor_value:'Today no work has been done on this project',
  hours_data: [
    'Hours',
    'Less than 5 Hours',
    'Greater than 5 and Less than equal to 8',
    'Greater than 8',
    'Greater than 10',
  ],
  // hours_data: [
  //   {value:'Hours',compareValue:''},
  //   {value:'Less than 5 Hours',compareValue:'>5'},
  //   {value:'Greater than 5 and Less than equal to 8',compareValue:'< 5 > 8'},
  //   {value:'Greater than 8',compareValue:'>8'},
  //   {value:'Greater than 10',compareValue:'>10'},
  // ],
  reset_button: 'Reset',
  search_button: 'Search',
  list_title: 'List All Worksheets',
  table_heading: LIST_DSR_HEADING,
  table_data: LIST_DSR_DATA,
};

export const ALL_PROJECT_DATA = {
  header_value: 'All Projects',
  table_heading: ALL_PROJECTS_Heading,
  table_data: ALL_PROJECT_TABLE_DATA,
};

export const DELETE_DIALOG_DATA = {
  header_value: 'Delete Record',
  text: `Record deleted can't be restored!!!`,
  close_button: 'Close',
  confirm_button: 'Confirm',
};
export const PROJECT_DATA = [
  {
    id: 0,
    header_value: 'Training Project React JS',
    tag_label: 'Project Tags/label',
    tag_body: 'Hello !',
    overview_label: 'Overview',
    notes_label: 'Notes',
    dsr_label: 'DSR Reports',
  },
];
export const PROJECT_PLAN_DATA = {
  data1: [
    {
      button: 'R',
      title: 'Roadmap',
      subtitle: 'No Document',
    },
    {
      button: 'P',
      title: 'Project Plan',
      subtitle: 'No Document',
    },
    {
      button: 'U',
      title: 'User Stories',
      subtitle: 'No Document',
    },
    {
      button: 'D',
      title: 'Designs',
      subtitle: 'No Document',
    },
  ],
  data2: [
    {
      button: 'S',
      title: 'Scope Of Work',
      subtitle: 'No Document',
    },
    {
      button: 'W',
      title: 'Wireframe',
      subtitle: 'No Document',
    },
    {
      button: 'O',
      title: 'Other',
      subtitle: 'No Document',
    },

    {
      button: 'L',
      title: 'Project App Links',
      subtitle: 'No Link',
    },
  ],
};

export const NOTE_DATA = {
  note_label: 'Project Note',
  card_data: [
    {
      label: 'Project Plan',
      sublabel: '',
      download: 'Download',
      time: ' Time:',
      time_data: '13, Dec 2020 09:10 AM',
    },
    {
      label: 'SRS',
      sublabel: 'SRS',
      download: 'Download',
      time: ' Time:',
      time_data: '21, May 2021 01:09 PM',
    },
  ],
};

export const DSR_REPORT_DATA = {
  filter_label: 'Filters',
  date_from_label: 'Date From',
  date_to_label: 'Date to',
  department_label: 'Department',
  resource_label: 'Project Resource',
  submission_label: 'Submission Status',
  pm_label: 'PM Approval Status',
  am_label: 'AM Approval Status',
  rm_label: 'RM Approval Status',
  final_label: 'Final Approval Status',
  Hours: 'Hours',
  hours_data: [
    'Hours',
    'Less than 5 Hours',
    'Greater than 5 and Less than equal to 8',
    'Greater than 8',
    'Greater than 10',
  ],
  resource_data: [
    'Harshit Kumar Jain ()',
    'Nikhil Dubey ()',
    'Shiva Saroj ()',
    'Shivam Shukla ()',
  ],
  submission_data: ['All', 'Pending', 'Approved', 'Rejected'],
  status_data: ['All', 'Submitted', 'Due'],
  departemnt: [
    'All',
    '.NET',
    'Android',
    'Angular',
    'IOS',
    'HTML',
    'Marketing',
    'Quality Analyst',
    'Node.Js',
    'FINANCE',
  ],
  apply_button: 'Apply',
  reset_button: 'Reset',
  dsr_list_label: 'DSR list',
  table_heading: PROJECT_LIST_DSR_HEADING,
  table_data: [],
  dsr_analytics_label: 'DSR Analytics',
  analytics_data: [
    { value: 'Total DSR Submitted' },
    { value: 'Total DSR DUE' },
    { value: 'Total DSR Pending Apporval' },
    { value: 'Total DSR Approved' },
    { value: 'Total DSR Rejected' },
    { value: 'Pending AM Approvals' },
    { value: 'Pending PM Approvals' },
    { value: 'Pending RM Approvals' },
  ],
};

export const OVERVIEW_DATA = {
  planned_label: 'Planned Deliveries',
  detail_label: 'Team Detail (Team Size 13)',
  table_heading: DETAIL_HEADING,
  delivery_heading: PLANNED_DELIVERY_HEADING,
  table_data: [],
};
export const ADD_TAG_DATA = {
  add_tag_label: 'Add Tag',
  cancel_button: 'Cancel',
  add_button: 'Add',
};

export const LEAVE_DETAILS = {
  leave_detail_label: 'Leave Details',
  employee_label: 'Employee Name',
  employee_data: 'Harshit Kumar Jain (AI1611)',
  type_label: 'Leave Type',
  duration_label: 'Leave Duration',
  duration_data: 'Full Day',
  applied_label: 'Applied On',
  start_date_label: 'Start Date',
  end_date_label: 'End Date',
  document_label: 'Uploaded Document',
  reason_label: 'Reason',
  reason_data: `Hello,`,
  reason_data1: `This is to inform you that I won't be able to come to the office for one day (26 Dec 2022) due to a family function in my hometown.`,
  remarks_label: 'Remarks',
  remarks_data: 'Family Function',
  approval_label: 'Approval Status',
};

export const DSR_DETAIL = {
  header_value: 'Harshit Kumar Jain | DSR | 01, Mar 2023',
  table_heading: LIST_DSR_DETAIL_HEADING,
  table_data: LIST_DSR_DETAIL_DATA,
};

export const EDIT_DSR = {
  editor_label: 'Description',
  project_label: 'Project',
  // project_data: ['Training Project React JS', 'Miscellaneous', 'Interview'],
  date_label: 'Date',
  hour_label: 'Estimated Hour',
  update_button: 'Update',
};

export const GRID_VIEW_DATA = [
  {
    project_name: 'Training Project React JS',
    timeandmaterial: 'Time and Material (TNM)',
    progress: 'In Progress',
    no_milestones: 'no milestone defined',
    resources: 'Resources',
    number_of_resources: 11,
    images: [
      { alt: 'male1', img: '/assets/images/default_male.jpg' },
      { alt: 'male2', img: '/assets/images/default_male.jpg' },
      { alt: 'Harshit Kumar Jain', img: 'src/assets/images/default_male.jpg' },
      { alt: 'Suyash Saxena', img: 'src/assets/images/default_male.jpg' },
    ],
    hours_data: 'N/A',
    hours: 'Hours',
    project_complete: 'Project Completed',
  },
  // {
  //   project_name: 'Training Project React JS',
  //   timeandmaterial:'Time and Material (TNM)',
  //   progress:'In Progress',
  //   no_milestones:'no milestone defined',
  //   resources:'Resources',
  //   number_of_resources:11,
  //   images:[
  //     {alt:'male1',img:'/assets/images/default_male.jpg'},
  //     {alt:'male2',img:'/assets/images/default_male.jpg'},
  //     {alt:'Harshit Kumar Jain',img:'src/assets/images/default_male.jpg'},
  //     {alt:'Suyash Saxena',img:'src/assets/images/default_male.jpg'},
  //   ],
  //   hours_data:'N/A',
  //   hours:'Hours',
  //   project_complete:'Project Completed'

  // },
  // {
  //   project_name: 'Training Project React JS',
  //   timeandmaterial:'Time and Material (TNM)',
  //   progress:'In Progress',
  //   no_milestones:'no milestone defined',
  //   resources:'Resources',
  //   number_of_resources:11,
  //   images:[
  //     {alt:'male1',img:'/assets/images/default_male.jpg'},
  //     {alt:'male2',img:'/assets/images/default_male.jpg'},
  //     {alt:'Harshit Kumar Jain',img:'src/assets/images/default_male.jpg'},
  //     {alt:'Suyash Saxena',img:'src/assets/images/default_male.jpg'},
  //   ],
  //   hours_data:'N/A',
  //   hours:'Hours',
  //   project_complete:'Project Completed'

  // },
];

export const REQUEST_DINNER_DATA = {
  dinner_request_label: 'Dinner Request',
  note_label: 'Note: ',
  note_data: ' You can request/cancel dinner for today before 6:00 PM',
  dinner_button: 'Request Dinner',
  date_label: 'Date',
  submit_button: 'Submit',
  project_label: 'Project',
  project_data: [
    'Select Project',
    'Training Project React JS',
    'Miscellaneous',
  ],
  editor_label: 'Reason for late stay',
};

export const AMOUNT_DUE = {
  header_value: 'Amount Due',
  available_coupon_label: 'Available coupon for purchase: ',
  button_view: 'View Details',
  note_label: 'Note : ',
  amount_due_note: 'Amount due need to paid in cash in account office.',
};

export const PURCHASE_COUPON = {
  note_data:
    'You can purchase/cancel a coupon for the upcoming day before 6 p.m. today.',
  button_value: '+ Purchase Coupons ',
  note_label: 'Note : ',
  lunch_coupon_label: 'Lunch Coupon',
  count_label: 'Coupon Count',
  amount_label: 'Total Amount (Rs)',
  submit_button: 'Submit',
  cancel_button: 'Cancel',
};

export const CONFIMATION_VALUE_DIALOG = {
  QUESTION_VALUE: 'Changes that you made may not be saved.',
  BUTTON1: 'Cancel',
  BUTTON2: 'Confirm',
}
