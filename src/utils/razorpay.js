export function loadRazorpay() {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(window.Razorpay)
      return
    }
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.onload = () => resolve(window.Razorpay)
    script.onerror = () => resolve(null)
    document.body.appendChild(script)
  })
}

export async function initiateRazorpayPayment({ amount, name, email, phone, items }) {
  const Razorpay = await loadRazorpay()
  if (!Razorpay) {
    alert('Payment gateway failed to load. Please try again.')
    return null
  }

  // Note: In production, create an order from your backend
  // This is a demo integration — replace with real backend call
  const options = {
    key: 'rzp_live_placeholder', // Replace with your Razorpay Key ID
    amount: amount * 100, // Amount in paise (₹1 = 100 paise)
    currency: 'INR',
    name: 'SOVÉRA',
    description: 'Meaningful Everyday Jewellery',
    image: '/favicon.svg',
    handler: function (response) {
      // Payment successful — handle post-payment actions
      return response
    },
    prefill: {
      name: name || 'SOVÉRA Customer',
      email: email || '',
      contact: phone || '',
    },
    notes: {
      address: 'SOVÉRA Online Store',
    },
    theme: {
      color: '#C5A059',
    },
    modal: {
      ondismiss: function () {
        console.log('Payment cancelled')
      },
    },
  }

  const rzp = new Razorpay(options)
  rzp.open()
  return rzp
}
