 
export default async function handler(req, res) {
    if (req.method === "POST") {
        const { name, email, phone, subject, message } = req.body;

        // You can process the form data here (e.g., save to a database or send an email)
        console.log({ name, email, phone, subject, message });

        return res.status(200).json({ message: "Form submitted successfully!" });
    }

    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
}


export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins, or specify your frontend URL
    res.setHeader('Access-Control-Allow-Methods', 'POST'); // Allow POST requests

    if (req.method === "POST") {
        const data = req.body;

        // Process form data (e.g., save to database, send email, etc.)
        res.status(200).json({ message: "Form submitted successfully!" });
    } else {
        res.status(405).json({ message: "Method Not Allowed" });
    }
}
