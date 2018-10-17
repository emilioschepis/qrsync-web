export class Code {
    id: string;
    content: string;
    rawValue: string;
    extra: string;
    title: string;
    type: CodeType;
    timestamp: firebase.firestore.Timestamp;
}

enum CodeType {
    UNKNOWN = 'UNKNOWN',
        TEXT = 'TEXT',
        URL = 'URL',
        CONTACT = 'CONTACT',
        EMAIL = 'EMAIL',
        SMS = 'SMS',
        PHONE = 'PHONE',
        CALENDAR = 'CALENDAR',
        PRODUCT = 'PRODUCT',
        ISBN = 'ISBN'
}
