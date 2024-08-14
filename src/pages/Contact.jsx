
function Contact() {
    return (
        <div className="p-6 max-w-2xl mx-auto bg-orange-50 mt-10">
            <h2 className="text-3xl font-bold mb-4 text-orange-500">Contact Us</h2>
            <p className="text-lg mb-4">
                We would love to hear from you! Whether you have questions, feedback, or need support, feel free to get in touch with us.
            </p>
            <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-lg">support@sneakerhaven.com</p>
            </div>
            <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-lg">+1 (555) 123-4567</p>
            </div>
            <div>
                <h3 className="text-xl font-semibold mb-2">Address</h3>
                <p className="text-lg">
                    Sneaker Haven<br />
                    1234 Shoe Street<br />
                    Sneakerville, ST 56789<br />
                    USA
                </p>
            </div>
        </div>
    );
}

export default Contact;
