import { create } from "zustand";

interface Store {
    client_Phone: string;
    client_email: string;
    client_map_address_link: string;
    client_map_address_text: string;
}

const useStore = create<Store>(() => ({
    client_Phone: "+92 300 1265331",
    client_email: "noreply@lahorecarpenter.com",
    client_map_address_link:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108839.4382984029!2d74.20432374531249!3d31.482832300000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904469e0e0e0e%3A0x4c4b8a9a9e9e9e9e!2sJohar%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890",
    client_map_address_text: "Johar Town, Lahore, Punjab, Pakistan",
}));

export { useStore };