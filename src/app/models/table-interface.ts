export interface TableColumn {
  heading: string;
  key: string;
  sort?: boolean;
  type: string;
  link?:string
  align?: 'right' | 'left' | 'center';
}
export interface SHIFTTABLE {
DATE?:string;
shift?:string
}
export interface QUALIFICATIONTABLE {
educationLevel?:string;
action?:any;
school?:string;
fromTimetotoTime?:string;
language?:any
}

export interface POLICY_DOCUMENT {
sNo?:number;
name?:string;
text_with_icon?:string;
doctype?:string;
size?:string;
date?:string;
download?:string;
link?:string;
}
export interface TRAINING_TOPIC {
  sNo?:number,
  topic?:string,
  topictrainer?:string,
  email?:string,
  startDate?:string,
  endDate?:string,
  url?:string
}
export interface SUB_TOPIC {
  sNo?:number,
  topic?:string,
  subtopic?:string,
  topictrainer?:string,
  email?:string,
  startDate?:string,
  endDate?:string,
  url?:string
}

export interface MY_LEAVE__TABLE {
type?:string,
requestfrom?:string,
requestto?:string
applied?:any,
status?:string
level1?:string
level2?:string
id?:any
}
