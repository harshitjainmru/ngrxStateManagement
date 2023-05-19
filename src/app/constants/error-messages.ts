
export const validationMessage =
{
  required:"This field is required",
  email:[
    {type:'required',message:'Email is required'},
    {type:'pattern',message:'Enter a valid email'},
    {type:'maxlength',message:'Email can not be more than 40 characters'}

  ],
  password:[
    {type:'required',message:'Password is required'},
    {type:'pattern',message:'Password between 8 to 16 character like (Har:123)'}
  ],
  firstName:[
    {type:'required',message:'First Name field is required'},
    {type:'pattern',message:'Only alphabets are allowed and length should be 3 to 25 characters'}
  ],
  lastName:[
    {type:'required',message:'Last Name field is required'},
    {type:'pattern',message:'Only alphabets are allowed and length should be 3 to 25 characters'}

  ],
  dob:[
    {type:'required',message:'DOB field is required'},
  ],
  gender:[
    {type:'required',message:'Gender field is required'},
  ],
  maritalStatus:[
    {type:'required',message:'Marital Status field is required'},
  ],
  contact:[
    {type:'required',message:'Contact field is required'},
    {type:'pattern',message:'Phone number must be atleast 10 numbers'},
  ],
  total_year:[
    {type:'required',message:'Year field is required'},
  ],
  total_month:[
    {type:'required',message:'Month field is required'},
  ],
  address:[
    {type:'required',message:'Address field is required'},
    {type:'maxlength',message:'Address can not be more than 60 characters'},
    {type:'minlength',message:'Address must be at least 20 characters'},

  ],
  school:[
    {type:'required',message:'School/University field is required'},
  ],
  educationLevel:[
    {type:'required',message:'Education Level field is required'},
  ],
  fromTime:[
    {type:'required',message:'From Time field is required'},
  ],
  toTime:[
    {type:'required',message:'To Time field is required'},
  ],
  language:[
    {type:'required',message:'Language field is required'},
  ],
  professionalCourses:[
    {type:'required',message:'Professional Course field is required'},
    {type:'maxlength',message:'Professional Course can not be more than 50 characters'},
    {type:'minlength',message:'Professional Course must be at least 3 characters'}


  ],
  description:[
    {type:'required',message:'Description field is required'},
    {type:'maxlength',message:'Description can not be more than 60 characters'},
    {type:'minlength',message:'Description must be at least 20 characters'}
  ],
  oldPassword:[
    {type:'required',message:'Old Password Field is required'},
    {type:'pattern',message:'Password between 8 to 16 character like (Har:123)'}
  ],
  newPassword:[
    {type:'required',message:'New Password Field is required'},
    {type:'pattern',message:'Password between 8 to 16 character like (Har:123)'}
  ],
  confirmPassword:[
    {type:'required',message:'Confirm Password Field is required'},
    {type:'pattern',message:'Password between 8 to 16 character like (Har:123)'},
    {type:'confirmedValidator',message:`Passsword and Confirm Password didn't match.`},
  ],
  title:[
    {type:'required',message:'Title field is required'},
  ],
  briefReason:[
    {type:'required',message:'Brief Reason field is required'},
    {type:'minlength',message:'Reason requires atleast 25 characters'}
  ],
  skill_enhancement:[
    {type:'required',message:'skill_enhancement field is required'},
    {type:'minlength',message:'skill_enhancement requires atleast 25 characters'}

  ],
  skill_needed:[
    {type:'required',message:'skill_needed field is required'},
    {type:'minlength',message:'skill_needed requires atleast 25 characters'}

  ],
  interested:[
    {type:'required',message:'interested field is required'},
  ],
  timeline:[
    {type:'required',message:'timeline field is required'},
  ],
  date:[
    {type:'required',message:'Required Date field is required'},
  ],
  reason:[
    {type:'required',message:'Request Reason field is required'},
    {type:'maxlength',message:'Request Reason can not be more than 50 characters'},
    {type:'minlength',message:'Request Reason must be at least 3 characters'},
  ],
  id:[
    {type:'required',message:'Employee ID field is required'},
  ],
  code:[
    {type:'required',message:'Unique Asset Code field is required'},
  ],
  serialnumber:[
    {type:'required',message:'Serial Number field is required'},
  ],
  modelnumber:[
    {type:'required',message:'Model Number field is required'},
  ],
  osversion:[
    {type:'required',message:'OS Version field is required'},
  ],
  brand:[
    {type:'required',message:'Brand field is required'},
  ],
  color:[
    {type:'required',message:'Colour field is required'},
  ],
  assetimage:[
    {type:'required',message:'Asset Image field is required'},
  ],
  addtag:[
    {type:'required',message:'Add tag field is required'},
    {type:'minlength',message:'Add tag requires atleast 3 characters'}
  ],
  upload:[
    {type:'required',message:'Upload field is required'},
  ]

}
