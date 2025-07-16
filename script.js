document.addEventListener('DOMContentLoaded', function() {
    const numParticipantsInput = document.getElementById('numParticipants');
    const totalPriceSpan = document.getElementById('totalPrice');

    const basePricePerHour = 600; // Example base price per hour for 3 hours (1800 / 3)
    const baseHours = 3; // Initial number of hours shown

    function updateTotalPrice() {
        // This is a very simplistic calculation. You'd need a more complex
        // logic based on tour type, date, number of participants, etc.
        const participants = parseInt(numParticipantsInput.value);
        if (isNaN(participants) || participants < 1) {
            totalPriceSpan.textContent = `₪ 0`;
            return;
        }

        // For simplicity, let's say price scales linearly with participants
        // For example, if 1 participant is 1800, 2 might be 3000, etc.
        // Or it could be a fixed price for up to X participants.
        // Here, I'll just show the base price for 3 hours, as the image implies.
        // To make it dynamic, you'd need a pricing structure.
        const calculatedPrice = basePricePerHour * baseHours; // Sticking to the 1800 for 3 hours shown

        // If you want to make it scale with participants (example):
        // const pricePerParticipant = 600; // Example
        // const calculatedPrice = participants * pricePerParticipant;

        totalPriceSpan.textContent = `₪ ${calculatedPrice}`;
    }

    // Call on load and whenever participants change (though image shows fixed)
    // You might link this to tour type, specific dates for actual pricing
    numParticipantsInput.addEventListener('input', updateTotalPrice);

    // Initial update
    updateTotalPrice();


    // Example for form submission (replace with actual AJAX/fetch to a backend)
    const tourForm = document.querySelector('form');
    tourForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Basic validation (you'll need more robust validation)
        const tourDate = document.getElementById('tourDate').value;
        if (!tourDate) {
            alert('אנא בחר תאריך לסיור.'); // Please select a tour date.
            return;
        }

        // Gather form data
        const formData = {
            tourType: document.getElementById('tourType').value,
            numParticipants: numParticipantsInput.value,
            tourDate: tourDate,
            pickupLocation: document.getElementById('pickupLocation').value,
            contactEmail: document.getElementById('contactEmail').value,
            contactPhone: document.getElementById('contactPhone').value
        };

        console.log('Form Data:', formData);

        // Here you would typically send this data to your backend server
        // using fetch() or XMLHttpRequest.
        // Example (conceptual):
        /*
        fetch('/api/submit-tour-order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('ההזמנה נשלחה בהצלחה!'); // Order sent successfully!
                tourForm.reset(); // Clear the form
            } else {
                alert('שגיאה בשליחת ההזמנה: ' + data.message); // Error sending order
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('אירעה שגיאה. נסה שוב מאוחר יותר.'); // An error occurred. Please try again later.
        });
        */

        alert('הזמנה נשלחה (למטרות הדגמה בלבד. נדרש בקאנד אמיתי).'); // Order sent (for demo purposes only. Real backend required).
    });
});
