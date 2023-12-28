interface KeyInterface {
    readonly signature: number,
    getSignature(): number
}

class Key implements KeyInterface {
    signature: number = Math.random()
    getSignature(): number {
        return this.signature;
    }
}

class Person {
    constructor(private key: Key) {}
    public getKey(): number {
        return this.key.getSignature();
    }
}

abstract class House {
    protected door: boolean = false;
    protected key: Key;
    protected tenants: Person[] = [];
    constructor(key: Key) {
        this.key = key;
    }

    comeIn(person: Person) {
        if (this.door) {
            this.tenants.push(person)
        }
    }

    abstract OpenDoor(key: number): any;
}

class MyHouse extends House {
    OpenDoor(key: number): any {
        if (this.key.getSignature() === key) {
            this.door = true;
            return true;
        }
        return false;
    }
}


const key = new Key();
//
const house = new MyHouse(key);
const person = new Person(key);
//
house.OpenDoor(person.getKey());
//
house.comeIn(person);


export {};