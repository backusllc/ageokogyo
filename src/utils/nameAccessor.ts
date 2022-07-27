export function get<T, P1 extends keyof T>(obj: T, prop1: P1): T[P1];
export function get<T, P1 extends keyof T, P2 extends keyof T[P1]>(obj: T, prop1: P1, prop2: P2): T[P1][P2];
export function get<T, P1 extends keyof T, P2 extends keyof T[P1], P3 extends keyof T[P1][P2]>(obj: T, prop1: P1, prop2: P2, prop3: P3): T[P1][P2][P3];
export function get<T, P1 extends keyof T, P2 extends keyof T[P1], P3 extends keyof T[P1][P2]>(obj: T, prop1: P1, prop2?: P2, prop3?: P3): T[P1] | T[P1][P2] | T[P1][P2][P3] {
    if (prop3 && prop2) {
        return obj[prop1][prop2][prop3];
    }
    
    if (prop2) {
        return obj[prop1][prop2];
    }
    
    return obj[prop1];
}

export function reducer<T, P1 extends keyof T>(value: T[P1], obj: T, prop1: P1): T;
export function reducer<T, P1 extends keyof T, P2 extends keyof T[P1]>(value: T[P1][P2], obj: T, prop1: P1, prop2: P2): T;
export function reducer<T, P1 extends keyof T, P2 extends keyof T[P1], P3 extends keyof T[P1][P2]>(value: T[P1][P2][P3], obj: T, prop1: P1, prop2: P2, prop3: P3): T;
export function reducer<T, P1 extends keyof T, P2 extends keyof T[P1], P3 extends keyof T[P1][P2]>(value: T[P1] | T[P1][P2] | T[P1][P2][P3], obj: T, prop1: P1, prop2?: P2, prop3?: P3): T {
    if (prop3 && prop2) {
        return {
            ...obj,
            [prop1]: {
                ...obj[prop1],
                [prop2]: {
                    ...obj[prop1][prop2],
                    [prop3]: value,
                }
            },
        };
    }
    
    if (prop2) {
        return {
            ...obj,
            [prop1]: {
                ...obj[prop1],
                [prop2]: value,
            },
        };
    }
    
    return {
        ...obj,
        [prop1]: value,
    };
}
