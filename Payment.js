import './Payment.css';
import StripeCheckout from 'react-stripe-checkout';
import GooglePayButton from '@google-pay/button-react';
import React from'react';
function Payment() {
  const onToken = (token) =>{
    console.log(token);
  };

  return (
    <div className="A11">
      <StripeCheckout
        token={onToken}
        stripeKey="pk_test_51No9KRSJicHs9oEluIjlNDcfnKCFb8nc3ZJioWXH7CXXrNmsHC2JCRwa6KLSaX56QphKNaTxo4OVCJ5mBhLhOHlX00xv0B93v7"
        paymentMethodOptions={[
          {
            id: "card",
            label: "Credit or debit card"
          },
          {
            id: "phonepe",
            label: "PhonePe"
          },
          {
            id: "googlePay",
            label: "Google Pay"
          }
        ]}
      />
      
      
      
      <GooglePayButton
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: 'CARD',
              parameters: {
                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                allowedCardNetworks: ['MASTERCARD', 'VISA'],
              },
              tokenizationSpecification: {
                type: 'PAYMENT_GATEWAY',
                parameters: {
                  gateway: 'example',
                  gatewayMerchantId: 'exampleGatewayMerchantId',
                },
              },
            },
          ],merchantInfo: {
            merchantId: '12345678901234567890',
            merchantName: 'Demo Merchant',
          },
          transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPriceLabel: 'Total',
            totalPrice: '1',
            currencyCode: 'USD',
            countryCode: 'US',
          },
          shippingAddressRequired: true,
          callbackIntents: ['SHIPPING_ADDRESS', 'PAYMENT_AUTHORIZATION'],
        }}
        onLoadPaymentData={paymentRequest => {
          console.log('Success', paymentRequest);
        }}
        onPaymentAuthorized={paymentData => {
            console.log('Payment Authorised Success', paymentData)
            return { transactionState: 'SUCCESS'}
          }
        }onPaymentDataChanged={paymentData => {
          console.log('On Payment Data Changed', paymentData)
          return { }
        }
      }
      existingPaymentMethodRequired='false'
      buttonColor='black'
      buttonType='Buy'
    />
    </div>
  );
}

export default Payment;