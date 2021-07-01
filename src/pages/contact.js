import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import { FaInstagram , FaTwitter , FaYoutube , FaRegEnvelope} from "react-icons/fa"
import { Text, Radio, RadioGroup , Stack, HStack, Heading, Textarea, Button, Input, useColorModeValue, chakra, Box} from "@chakra-ui/react"



const ContactPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Contact - {site.siteMetadata.title}</title>
        <meta name="description" content="Get in touch with any questions, suggestions, or feedback you may have. I typically answer within 24 hours." />

        <meta property="og:title" content={"Contact - "+ site.siteMetadata.title}/>
        <meta property="og:description" content="Get in touch with any questions, suggestions, or feedback you may have. I typically answer within 24 hours."/>
        
        <meta property="og:url" content="https://neocapitalist.darrendube.com/contact"/>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@darrendube" />
        <meta name="twitter:creator" content="@darrendube" />
        <meta property="og:image" content={"https://neocapitalist.darrendube.com/icon.png"}/>

      </Helmet>

      <Box className="two-grids">
        
        <Box className="contact-page-text">
          <Heading mb="1.5rem" className="contact-heading">Get in Touch</Heading>
          <Text className="contact-text" mb="1.5rem">Feel free to ask any questions or give feedback &rarr;</Text>
          
          <HStack spacing={3}>
<a href="https://instagram.com/darrenzdube" target="_blank"><FaInstagram fontSize="1.3rem" mr="2rem"/></a>
<a href="https://twitter.com/darrendube" target="_blank"><FaTwitter fontSize="1.3rem"/></a>
<a href="https://www.youtube.com/channel/UCUuowwJOmQzQfH_ub-qNxiA" target="_blank"><FaYoutube fontSize="1.3rem"/></a>
</HStack>
        </Box>

        <Box>
          <chakra.form name="Contact Form" className="" method="POST" data-netlify="true" p="32px">
<input type="hidden" name="form-name" value="Contact Form" />
            <Box mb="1.5rem">
              <label htmlFor="w3lName" >Name</label>
              <Input type="text" name="Name" id="w3lName"  mt="5px" />
            </Box>
            <Box mb="1.5rem">
              <label htmlFor="w3lSender">Email<span className="required">*</span></label>
              <Input type="email" name="Email" id="w3lSender" mt="5px" required/>
            </Box>
            <Box mb="1.5rem">
              <label htmlFor="w3lSubject">Subject</label>
              <Input type="text" name="Subject" id="w3lSubject" mt="5px" />
            </Box>
            <Box mb="1.5rem">
              <label htmlFor="w3lMessage">Message<span className="required">*</span></label>
              <Textarea name="Message" id="w3lMessage" required mt="5px" ></Textarea>
              
            </Box>
            <Box style={{display: "flex", justifyContent: "flex-end"}}>
            <Button
            type="submit"
            colorScheme="blue"
            flexShrink={0}
            width={{
              base: 'full',
              md: 'auto',
            }}

          >
            Submit
          </Button>
            </Box>
          </chakra.form>
        </Box>
      </Box>
    </Layout>
  )
}

export default ContactPage
export const pageQuery = graphql`
  query ContactPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
