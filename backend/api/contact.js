export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*"); 
    res.setHeader("Access-Control-Allow-Methods", "POST");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        // Preflight request for CORS
        return res.status(200).end();
    }
 
    if (req.method === "POST") {
        try {
            const { name, email, phone, subject, message } = req.body;

            if (!name || !email || !message) {
                return res.status(400).json({ error: "Name, email, and message are required." });
            }

            console.log({ name, email, phone, subject, message });

            return res.status(200).json({ message: "Form submitted successfully!" });
        } catch (error) {
            console.error("Error processing form submission:", error);
            return res.status(500).json({ error: "Something went wrong!" });
        }
    } else {
        res.setHeader("Allow", ["POST"]);
        return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }
}
