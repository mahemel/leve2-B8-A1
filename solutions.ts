const multiplyValue = (value: number, multiplier: number = 2): number => {
    return value * multiplier;
};

const processInput = (input: string | number | boolean): string | number => {
    if (typeof input === "string") {
        return input.trim().toLowerCase();
    } else if (typeof input === "number") {
        return input * 10;
    }

    return input ? "Active" : "Inactive";
};

type Coordinate = readonly [number, number, string];
const formatCoordinate = (coordinate: Coordinate): string => {
    const [latitude, longitude, locationName] = coordinate;
    return `Location: ${locationName} (${latitude}, ${longitude})`;
};

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    return arrays.reduce(
        (previousArray, currentArray) => previousArray.concat(currentArray),
        [],
    );
};

interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

const getPopularCourses = (
    courses: Course[],
    minStudents: number,
): Course[] => {
    return courses.filter(
        (course) =>
            course.students >= minStudents && course.isPublished === true,
    );
};

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
    return items.map((item) => item[key]);
};

class Employee {
    protected name: string;
    private baseSalary: number;
    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    private department: string;
    constructor(name: string, baseSalary: number, department: string) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}

const validateAgeAsync = async (age: number): Promise<string> => {
    if (age < 18) {
        throw new Error("Access Denied: Must be 18 or older");
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));

    return "Access Granted";
};
