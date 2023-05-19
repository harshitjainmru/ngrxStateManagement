/**
 * @ABS === ABSOLUTE
 */
import { IRoute } from '../models/routes-interface';
import * as routes from './routes';

// export const ABS_ACCOUNT_LOGIN = `/${routes.ACCOUNT}/${routes.LOGIN}`;
// export const ABS_ACCOUNT_FORGOT_PASSWORD = `/${routes.ACCOUNT}/${routes.FORGOT_PASSWORD}`;
// export const ABS_LAYOUT = `/${routes.LAYOUT}`

export const ACCOUNT: IRoute = {
  path: routes.ACCOUNT,
  get fullUrl(): string {
    return `${this.path}`;
  },
};
export const ABS_ACCOUNT_LOGIN: IRoute = {
  path: routes.LOGIN,
  get fullUrl(): string {
    return `/${ACCOUNT.fullUrl}/${this.path}`;
  },
};
export const ABS_ACCOUNT_FORGOT_PASSWORD: IRoute = {
  path: routes.FORGOT_PASSWORD,
  get fullUrl(): string {
    return `/${ACCOUNT.fullUrl}/${this.path}`;
  },
};
export const ABS_LAYOUT: IRoute = {
  path: routes.LAYOUT,
  get fullUrl(): string {
    return `${this.path}`;
  },
};

export const ABS_LAYOUT_HOME: IRoute = {
  path: routes.HOME,
  get fullUrl(): string {
    return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
  },
};
export const ABS_LAYOUT_MYPROFILE: IRoute = {
  path: routes.MY_PROFILE,
  get fullUrl(): string {
    return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
  },
};
export const ABS_LAYOUT_DIRECTORY: IRoute = {
  path: routes.DIRECTORY,
  get fullUrl(): string {
    return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
  },
};
export const ABS_LAYOUT_ENTREPRENURSHIP: IRoute = {
  path: routes.ENTREPRENURSHIP,
  get fullUrl(): string {
    return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
  },
};
export const ABS_BASIC_INFO: IRoute = {
  path: routes.BASIC,
  get fullUrl(): string {
    return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
  },
};
export const ABS_CHANGE_PASSWORD: IRoute = {
  path: routes.CHANGE_PASSWORD,
  get fullUrl(): string {
    return `/${ABS_LAYOUT_MYPROFILE.fullUrl}/${this.path}`;
  },
};
export const ABS_LAYOUT_EXPLORE: IRoute = {
  path: routes.EXPLORE,
  get fullUrl(): string {
    return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
  },
};
export const ABS_LAYOUT_MY_PITCH: IRoute = {
  path: routes.MY_PITCH,
  get fullUrl(): string {
    return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
  },
};
export const ABS_LAYOUT_HOLIDAY_CALENDER: IRoute = {
  path: routes.HOLIDAY_CALENDER,
  get fullUrl(): string {
    return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
  },
};
export const ABS_LAYOUT_REVIEW: IRoute = {
  path: routes.REVIEW,
  get fullUrl(): string {
    return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
  },
};
export const ABS_LAYOUT_MY_PERFORMANCE: IRoute = {
  path: routes.PERFORMANCE,
  get fullUrl(): string {
    return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
  },
};
export const ABS_LAYOUT_JOB_OPENING: IRoute = {
  path: routes.JOB_OPENING,
  get fullUrl(): string {
    return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
  },
};
export const ABS_LAYOUT_JOB_DETAIL: IRoute = {
  path: routes.JOB_DETAILS,
  get fullUrl(): string {
    return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
  },
};
export const ABS_LAYOUT_REFER_LIST: IRoute = {
  path: routes.JOB_LIST,
  get fullUrl(): string {
    return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
  },
};
export const ABS_LAYOUT_POLICY_DOC: IRoute = {
  path: routes.POLICY_DOC,
  get fullUrl(): string {
    return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
  },
};

export const ABS_LAYOUT_INTERVIEW_LIST: IRoute = {
  path: routes.INTERVIEW_LIST,
  get fullUrl(): string {
    return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
  },
};
export const ABS_LAYOUT_MY_FRESHER_TRAININGS: IRoute = {
  path: routes.MY_FRESHER_TRAINING,
  get fullUrl(): string {
    return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
  },
};
export const ABS_LAYOUT_MY_TRAININGS_DETAILS: IRoute = {
  path: routes.MY_TRAINING_DETAILS,
  get fullUrl(): string {
    return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
  },
};
export const ABS_LAYOUT_UPCOMING_TRAININGS: IRoute = {
  path: routes.UPCOMING_TRAININGS,
  get fullUrl(): string {
    return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
  },
};
export const ABS_LAYOUT_ONGOING_TRAININGS: IRoute = {
  path: routes.ONGOING_TRAININGS,
  get fullUrl(): string {
    return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
  },
};
export const ABS_LAYOUT_MY_TRAINING: IRoute = {
  path: routes.MY_TRAININGS,
  get fullUrl(): string {
    return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
  },
};
export const ABS_LAYOUT_REQUESTED_TRAININGS: IRoute = {
  path: routes.REQUEST_TRAININGS,
  get fullUrl(): string {
    return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
  },
};
export const ABS_LAYOUT_TRAINING_DETAILS: IRoute ={
  path: routes.TRAINING_DETAILS,
  get fullUrl(): string{
  return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
  }
}
export const ABS_LAYOUT_ASSETS: IRoute ={
  path: routes.ASSETS,
  get fullUrl(): string{
  return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
  }
}
export const ABS_LAYOUT_ASSETS_INVENTROY: IRoute ={
  path: routes.ASSETS_INVENTROY,
  get fullUrl(): string{
  return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
  }
}
export const ABS_LAYOUT_ASSETS_REQUESTS: IRoute ={
  path: routes.ASSETS_REQUESTS,
  get fullUrl(): string{
  return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
  }
}
export const ABS_LAYOUT_ASSETS_DECLARATION: IRoute ={
  path: routes.ASSETS_DECLARATION,
  get fullUrl(): string{
  return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
  }
}
export const ABS_LAYOUT_ATTENDANCE_CALENDAR: IRoute ={
  path: routes.ATTENDANCE_CALENDAR,
  get fullUrl(): string{
  return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
  }
}
export const ABS_LAYOUT_MANUAL_PUNCH: IRoute ={
  path: routes.MANUAL_PUNCH,
  get fullUrl(): string{
  return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
  }
}
export const ABS_LAYOUT_PUNCH_LOG: IRoute ={
  path: routes.PUNCH_LOG,
  get fullUrl(): string{
  return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
  }
}
export const ABS_LAYOUT_LEAVE: IRoute ={
  path: routes.LEAVE,
  get fullUrl(): string{
  return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
  }
}
export const ABS_LAYOUT_LEAVE_DETAILS: IRoute ={
  path: routes.LEAVE_DETAILS,
  get fullUrl(): string{
  return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
  }
}
export const ABS_LAYOUT_FLOATING_LEAVE: IRoute ={
  path: routes.FLOATING_LEAVE,
  get fullUrl(): string{
  return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
  }
}
export const ABS_LAYOUT_TICKETS: IRoute ={
  path: routes.TICKETS,
  get fullUrl(): string{
  return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
  }
}
export const ABS_LAYOUT_DSR: IRoute ={
  path: routes.DSR,
  get fullUrl(): string{
  return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
  }
}
export const ABS_LAYOUT_PROJECT: IRoute ={
  path: routes.PROJECT,
  get fullUrl(): string{
  return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
  }
}
export const ABS_LAYOUT_PROJECT_DETAILS: IRoute ={
  path: routes.PROJECT_DETAIL,
  get fullUrl(): string{
  return `/${ABS_LAYOUT_PROJECT.fullUrl}/${this.path}`;
  }
}

export const ABS_LAYOUT_DSR_DETAIL: IRoute ={
  path: routes.DSR_DETAIL,
  get fullUrl(): string{
  return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
  }
}
export const ABS_LAYOUT_DSR_EDIT: IRoute ={
  path: routes.EDIT_DSR,
  get fullUrl(): string{
  return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
  }
}
export const ABS_LAYOUT_FOOD: IRoute ={
  path:routes.LUNCH,
  get fullUrl(): string{
  return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
  }
}
export const ABS_LAYOUT_DINNER: IRoute ={
  path: routes.DINNER,
  get fullUrl(): string{
  return `/${ABS_LAYOUT.fullUrl}/${this.path}`;
  }
}
export const ABS_LAYOUT_PURCHASE_COUPON: IRoute ={
  path: routes.PURCHASE_COUPON,
  get fullUrl(): string{
  return `/${ABS_LAYOUT_FOOD.fullUrl}/${this.path}`;
  }
}

