import gql from 'graphql-tag'

export const PERSONAL_INFO = gql`{
    personalInfo: cvms {
        fullName       
        degree
        bgImage
        myImage
    }
}`
export const ABOUT_ME = gql`{
    am: cvms {
            aboutMe       
            lblAboutMe
    }
}`
export const FACTS_ABOUT_ME = gql`{
    fam: cvms {
            factsAboutMe{
                label
                desc
                icon
            }
        }
}`
export const SERVICES = gql`{
    services: cvms {
            lblMyServices
            services {
                titleOne
                subTitleOne
                descOne
                srcBgOne
                titleTwo
                subTitleTwo
                descTwo
                srcBgTwo
            }
        }
}`
export const PRICING = gql`{
    pricing: cvms {
            lblPricing
            price {
                label
                number
                lapse
                desc
                labelBuy
            }
        }
}`
export const FUN_FACTS = gql`{
    funFacts: cvms {
                lblFunFacts
                funFacts {
                    number
                    desc
                }
        }
}`
export const CLIENTS = gql`{
    clients: cvms {
        lblClients
        clients {
            client
            srcBg
        }
    }
}`
export const TESTIMONIALS = gql`{
    testimonials: cvms {
        lblTestimonials
        testimonials {
            name
            testimonial
        }
    }
}`
export const RESUME = gql`{
    resume: cvms {
        lblResume
        lblExperience
        experience{
            lapse
            position
            title
            desc
        }
        lblEducation
        education{
            lapse
            position
            title
            desc
        }
    }
}`
export const MY_SKILLS = gql`{
    mySkills: cvms {
        lblMySkills
        lblDesign
        linearSkills{
            name
            percent
        }
        lblLanguage
        languageSkills{
            language
            rating
        }
        lblCoding
        codingSkills{
            numberOne
            labelOne
            numberTwo
            labelTwo
        }
        knowledgeSkills
        lblKnowledge
    }
}`