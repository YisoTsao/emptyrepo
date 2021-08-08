import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import axios from 'axios'

const options = {
  providers: [
    Providers.Credentials({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials property is used to generate a suitable form on the sign in page.
      credentials: {
        type: { label: 'type', type: 'text' },
        value: { label: 'value', type: 'text', placeholder: 'gary.com' },
        vatNumber: { label: 'vatNumber', type: 'password' },
      },
      async authorize(credentials) {
        // Authentication Logic: local function, external API call, etc
        // const user = { id: 1, name: 'gary', email: 'gary@example.com' }
        // return user;

        var data = JSON.stringify({
          type: 'email',
          value: 'gary.tsao@car-plus.com.tw',
          vatNumber: '79960214',
        })

        var config = {
          method: 'post',
          url: 'https://gateway.api.beta.car-plus.cool/common/auth/v1/users/otpLogin/noSms',
          headers: {
            'X-System-Kind': 'AUTOLEASING',
            'X-Platform': 'WEB',
            'Content-Type': 'application/json',
          },
          data: data,
        }

        // const url = 'https://gateway.api.beta.car-plus.cool/common/auth/v1/users/otpLogin/noSms'
        const repsonse = await axios.post(config)

        if (repsonse) {
          console.log(repsonse.data)
          return user.data
        } else {
          return null
        }

        // var data = JSON.stringify({
        //   type: 'email',
        //   value: 'gary.tsao@car-plus.com.tw',
        //   vatNumber: '79960214',
        // })

        // var config = {
        //   method: 'post',
        //   url: 'https://gateway.api.beta.car-plus.cool/common/auth/v1/users/otpLogin/noSms',
        //   headers: {
        //     'X-System-Kind': 'AUTOLEASING',
        //     'X-Platform': 'WEB',
        //     'Content-Type': 'application/json',
        //   },
        //   data: data,
        // }

        // axios(config)
        //   .then(function (response) {
        //     console.log(JSON.stringify(response.data))

        //     if (response.statusCode == 0) {
        //       console.log(user.data);
        //       return response.data
        //     } else {
        //       return null
        //     }
        //   })
        //   .catch(function (error) {
        //     console.log(error)
        //   })
      },
    }),
  ],
  session: {
    jwt: true,
  },
  // jwt: {
  //   // A secret to use for key generation - you should set this explicitly
  //   // Defaults to NextAuth.js secret if not explicitly specified.
  //   secret: 'INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw',
  // },
}

export default (req, res) => NextAuth(req, res, options)
