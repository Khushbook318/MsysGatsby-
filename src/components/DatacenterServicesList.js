import { graphql } from "gatsby"

export const DatacenterList = [
    {
        id : 1,
        title : "Storage",
        srcImg : "https://staging.msystechnologies.com/wp-content/uploads/2019/12/database-1.svg",
        altImg : "storage",
        desc : "here is an ardent need to manage heavy, repetitive, and yet business-critical workflows, amidst today’s disruptive era of ..",
        href : "/services/storage-consulting-services/"
    },
    {
        id : 2,
        title : "Networking",
        srcImg : "https://staging.msystechnologies.com/wp-content/uploads/2019/12/Networking-01-1.svg",
        altImg : "networking",
        desc : "There is an ardent need to manage heavy, repetitive, and yet business-critical workflows, amidst today’s disruptive era of ..",
        href : "/services/network-solution-providers/"
    },
    {
        id: 3,
        title : "Virtualization",
        srcImg : "https://staging.msystechnologies.com/wp-content/uploads/2019/12/script-1.svg",
        altImg : "virtualizatio",
        desc : "The advent of cloud computing has created a greater need to drive collaboration, infrastructure agility, and nimble workloads ..",
        href : "/services/virtualization-services/"
    },
    {
        id : 4,
        title : "Cloud",
        srcImg : "https://staging.msystechnologies.com/wp-content/uploads/2019/12/cloud-computing-1.svg",
        altImg : "cloud",
        desc : "Digital transformation technologies such as AI, ML, Analytics, Mobility or Robotics come with un-imagined growth possibilities. These technologies..",
        href : "/services/cloud-computing-services/"
    },
    {
        id : 5,
        title : "Digital Services",
        srcImg : "https://staging.msystechnologies.com/wp-content/uploads/2019/12/script-1.svg",
        altImg : "Digital-Services",
        desc : "Today, we thrive within a connected-world, which is powered by digital technologies like big data, mobility, IoT, and",
        href : "/services/digital-services/"
    },
    {
        id : 6,
        title : "DevOps",
        srcImg : "https://staging.msystechnologies.com/wp-content/uploads/2019/12/Devops-1.svg",
        altImg : "devOps",
        desc : "There is an ardent need to manage heavy, repetitive, and yet business-critical workflows, amidst today’s disruptive era of",
        href : "/services/devops-services/"
    },
    {
        id : 7,
        title : "QA Automation",
        srcImg : "https://staging.msystechnologies.com/wp-content/uploads/2019/12/automation-1.svg",
        altImg : "QA Automation",
        desc : "There is an ardent need to manage heavy, repetitive, and yet business-critical workflows, amidst today’s disruptive era of",
        href : "/services/qa-automation-services/"
    },
    {
        id: 8,
        title: "UX/UI",
        srcImg : "https://staging.msystechnologies.com/wp-content/uploads/2019/12/ui-1.svg",
        altImg : "ux/ui",
        desc : "The Dotcom boom was a breakthrough in the global IT space. It was also the coming of age..",
        href: "/services/ui-ux-design-services/"
    },
    {
        id: 9,
        title: "Product Sustenance",
        srcImg : "https://staging.msystechnologies.com/wp-content/uploads/2020/01/sustain-engineering.png",
        altImg : "Product-Sustenance",
        desc: "As the world inches towards digital experience and technology becomes a complicated affair, organizations require a digital overhaul.&hellip",
        href: "/services/software-product-sustenance-support"
    }
]

export const query = graphql`
  query{
    msys {
      datacenter {
        data {
          attributes {
            Services {
                datacenter_services {
                  data {
                    attributes {
                      Description
                      Title
                      link {
                        href
                        id
                        label
                        target
                      }
                    }
                    id
                  }
                }
              }
            }
          }
        }
    }  
}
`