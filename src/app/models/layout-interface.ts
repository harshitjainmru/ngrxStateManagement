export interface IPROFILE {
  USER_NAME?: string,
  LABEL?: string,
  TEXT?:string
}

export interface IPROFILE_USERDETAILS {
  icon?: string,
  title?: string,
  routerLink?:string
}

export interface IREFERRAL {
  referralPrice?:number,
  fromYear?:any,
  toYear?:any,
}

export interface ILATEST_JOB {
  id?:number
  image?: string,
  LOCATION?: string,
  HEADING?:string,
  DEPARTMENT_VALUE?:string,
  DATE?:string,
  TEXT?:string,
  JOB_CODE?:string,
  OPENING_NUMBER_TEXT?:string,
  OPENING_NUMBER?:string,
  EXPERIENCE?:string,
  EXPERIENCE_NUMBER?:string,
  BUTTON_VIEW?:string,
  BUTTON_REFER?:string,
  position_title?:string
}

export interface IDIRECTORY_DATA {
  IMAGE?:string,
  EMP_NAME?:string,
  EMP_DESIGNATION?:string,
  EMP_TECHNOLOGY?:string,
  EMAIL_ICON?:string,
  EMAIL?:string,
  BIRTH_ICON?:string,
  BIRTH_DATE?:string,
  BIRTH_MONTH?:string
}
export interface IAWARDDATA{
  IMAGE?:string
  EMP_NAME?:string,
  DESIGNATION?:string,
  DATE?:string,
}
export interface IBIRTHDAYDATA{
  IMAGE?:string
  EMP_NAME?:string,
  DESIGNATION?:string,
  DATE?:string,
}
export interface IWORKANNIVERSARY{
  IMAGE?:string
  EMP_NAME?:string,
  DESIGNATION?:string,
  DATE?:string,
}
export interface IGALLERYDATA{
  IMAGE?:string,
  HEADING?:string,
  BUTTON?:string,
  NUM?:number,
  SUBIMAGE?:Array<any>
}
export interface IAPPRECIATIONDATA{
  HEADER_VALUE?:string,
  TEXT?:string,
  DEAR_VALUE?:string,
  MESSAGE?:string,
  BUTTON?:string,
  GREET?:string,
  VIEW_MORE?:Array<any>,
  HEAD_NAME?:string,
  TEAM_MEMBER?:string,
  HEAD_GREET?:string,
  APPRECIATION_NAME?:string,
  IMAGES?:string

}


