import * as Yup from 'yup';

const RegisterSchema = Yup.object().shape({
   
    fathersName: Yup.string()
        .required('Father\'s Name is required'),
    mothersName: Yup.string()
        .required('Mother\'s Name is required'),
    gender: Yup.string()
        .required('Gender is required'),
    domicile: Yup.string()
        .required('Domicile is required'),
    category: Yup.string()
        .required('Category is required'),
    lastExamType: Yup.string()
        .required('Last Exam Pass/Appear Type is required'),
    qualification: Yup.string()
        .required('Qualification is required'),
    passingYear: Yup.string()
        .required('Last Year Passing Year is required'),
    qualificationPercentage: Yup.string()
        .required('Qualifying Exam Percentage is required'),
    nationality: Yup.string()
        .required('Nationality is required'),
    qualifyingEntranceExam: Yup.string()
        .required('Qualifying Entrance Exam is required'),
    entranceBasedType: Yup.string()
        .required('Entrance Based Type is required'),
});

export default RegisterSchema;