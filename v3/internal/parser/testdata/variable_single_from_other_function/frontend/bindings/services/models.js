// @ts-check
// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT

export const Address = class {
    /**
     * Creates a new Address instance.
     * @constructor
     * @param {Object} source - The source object to create the Address.
     * @param {string} source.Street
     * @param {string} source.State
     * @param {string} source.Country
     */
    constructor(source = {}) {
        const { street = "", state = "", country = "" } = source;        
        this.street = street;
        this.state = state;
        this.country = country;
    }

    /**
     * Creates a new Address instance from a string or object.
     * @param {string|object} source - The source data to create a Address instance from.
     * @returns {Address} A new Address instance.
     */
    static createFrom(source) {
        let parsedSource = typeof source === 'string' ? JSON.parse(source) : source;
        return new Address(parsedSource);
    }
};
