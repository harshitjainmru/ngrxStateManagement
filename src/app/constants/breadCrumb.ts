import { ABS_LAYOUT_HOME, ABS_LAYOUT_MY_FRESHER_TRAININGS, ABS_LAYOUT_MY_PERFORMANCE, ABS_LAYOUT_MY_TRAININGS_DETAILS, ABS_LAYOUT_REVIEW, ABS_LAYOUT_TRAINING_DETAILS, ABS_LAYOUT_UPCOMING_TRAININGS } from "./absolute-routes";

export const BREADCRUMB = {
    'dashboard': [{ key: 'Dashboard', value: ABS_LAYOUT_HOME.fullUrl }],

    'admin-profile': [{ key: 'Home', value: ABS_LAYOUT_HOME.fullUrl }, { key: 'Profile', value: '' },],
    // 'edit-profile': [
    //     { key: 'Home', value: ABS_LAYOUT_HOME.fullUrl },
    //     { key: 'Profile', value: ADMIN.fullUrl },
    //     { key: 'Edit', value: '' },
    // ],
    // 'change-password': [
    //     { key: 'Home', value: ABS_LAYOUT_HOME.fullUrl },
    //     { key: 'Profile', value: PROFILE.fullUrl },
    //     { key: 'change password', value: '' },
    // ],

    'my-performance':[
        { key: 'Home', value: ABS_LAYOUT_HOME.fullUrl },
        { key: 'reviews', value: ABS_LAYOUT_REVIEW.fullUrl },
        { key: 'my-performance', value: ABS_LAYOUT_MY_PERFORMANCE.fullUrl },
    ],
    'internal-training-details':[
        { key: 'Home', value: ABS_LAYOUT_HOME.fullUrl },
        { key: 'trainings', value: ABS_LAYOUT_UPCOMING_TRAININGS.fullUrl },
        { key: 'details', value:`${ABS_LAYOUT_TRAINING_DETAILS.fullUrl}/:id` },
    ] ,
    'fresher-training-details':[
        { key: 'Home', value: ABS_LAYOUT_HOME.fullUrl },
        { key: 'trainings', value: ABS_LAYOUT_MY_FRESHER_TRAININGS.fullUrl },
        { key: 'details', value: `${ABS_LAYOUT_MY_TRAININGS_DETAILS.fullUrl}/:id` },
    ]

}
