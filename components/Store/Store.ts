import { create } from "zustand";

interface Store {
    client_Phone: string;
    client_email: string;
    client_map_address_link: string;
    client_map_address_text: string;
}

const useStore = create<Store>(() => ({
    client_Phone: "+92 324 1012395",
    client_email: "alisheraz2410@gmail.com",
    client_map_address_link:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2870.6946007235056!2d74.14400377473338!3d31.343431455864128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391855ee57cc292b%3A0xcf294c4410459a84!2sNew%20Lahore%20City%20Rd%2C%20Pakistan!5e1!3m2!1sen!2s!4v1779522347210!5m2!1sen!2s",
    client_map_address_text: "New Lahore City Rd, Lahore, Punjab, Pakistan",

}));

export { useStore };