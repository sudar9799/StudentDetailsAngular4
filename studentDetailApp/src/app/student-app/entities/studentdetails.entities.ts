export class StudentDetails {
    constructor(
        public studentId: string,
        public firstname: string,
        public lastname: string,
        public grade: string,
        public schoolname: string
    ) { }
};

export class EnrollmentHistoryDetails {
    constructor(
        public entryDate: string,
        public exitDate: string,
        public exitReason: string
    ) { }
};

export class AssignmentHistoryDetails {
    constructor(
        public assignmentName: string,
        public dueDate: string,
        public maxScore: number,
        public completionDate: string,
        public scoresEarned: number
    ) { }
};

// export const Session: any = {}