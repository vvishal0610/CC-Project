export class Feedback {
    studentid: number;
    degree: string;
    firstname: string;
    lastname: string;
    phone: number;
    email: string;   
    academics: string;
    architecture: string;
    job: boolean;
    jobrating: string;
    feedback: string;
};

export const degree = ['Undergrad', 'Grad', 'Phd', 'Alumini'];
export const academics = ['Good', 'Very Good', 'Excellent'];
export const architecture = ['Good', 'Very Good', 'Excellent'];
export const jobrating = ['Good', 'Very Good', 'Excellent'];