addEventListener("fetch", event => {
  const data  = {
        "basics": {
            "name": "Rishab Kumar",
            "label": "CloudOps/DevOps",
            "picture": "",
            "email": "rishabkumar7@gmail.com",
            "website": "http://rishabkumar.com",
            "summary": "AWS and Linux entusiast with some experience in the Cloud.",
            "location": {
                "city": "Kingston",
                "countryCode": "CA",
                "region": "Ontario"
            },
            "profiles": [{
                "network": "Twitter",
                "username": "rishabk7",
                "url": "http://twitter.com/rishabk7"
            },
            {
                "network": "Linkedin",
                "username": "Rishab Kumar",
                "url": "https://www.linkedin.com/in/rishabkumar7/"
            },
            {
                "network": "GitHub",
                "username": "rishabkumar7",
                "url": "https://github.com/rishabkumar7"
            }]
        },
        "work": [{
            "company": "ECi Software Solutions",
            "position": "CloudOps Specialist",
            "startDate": "2013-05-01",
            "endDate": "Present",
            "summary": "Description...",
        }],
        "education": [{
            "institution": "St. Lawrence College",
            "area": "Computer Networking",
            "studyType": "Diploma",
            "startDate": "2016-05-01",
            "endDate": "2018-06-01",
        }],
        "awards": [{
            "title": "AWS Certified Developer Associate",
            "date": "2017-11-01",
            "awarder": "AWS",
        },
        {
            "title": "AWS Certified Soultions Architect Associate",
            "date": "2017-11-01",
            "awarder": "AWS",
        },
        {
            "title": "AWS Certified Cloud Practitioner",
            "date": "2017-11-01",
            "awarder": "AWS",
        },
        {
            "title": "Microsoft Certified Azure Administrator Associate",
            "date": "2017-11-01",
            "awarder": "Microsoft",
        },
        {
            "title": "Microsoft Certified Azure Fundamentals",
            "date": "2017-11-01",
            "awarder": "Microsoft",
        }
        ],
        "skills": [
            {
                "name": "AWS",
                "level": "Intermediate",
                "keywords": [
                    "Cloud",
                    "Lambda",
                    "S3",
                    "CloudFront"
                ]
            },
            {
                "name": "Azure",
                "level": "Beginner",
                "keywords": [
                    "Azure Functions",
                    "VM",
                    "Storage"
                ]
            },
            {
                "name": "JavaScript",
                "level": "Intermediate",
                "keywords": [
                    "ECMAScript",
                    "ES6",
                    "Node.js",
                    "Web",
                    "Front End"
                ]
            },
            {
                "name": "React",
                "level": "Intermediate",
                "keywords": [
                    "SPA",
                    "Web",
                    "Front End"
                ]
            },
            {
                "name": "Vue",
                "level": "Intermediate",
                "keywords": [
                    "SPA",
                    "Web",
                    "Front End"
                ]
            },
            {
                "name": "Docker",
                "level": "Intermediate",
                "keywords": [
                    "Containers"
                ]
            }
        ],
        "interests": [{
            "name": "Volleyball",
            "keywords": [
                "Beach",
                "Court"
            ]
        }]
    }

  const json = JSON.stringify(data, null, 2)

  return event.respondWith(
    new Response(json, {
      headers: {
        "content-type": "application/json;charset=UTF-8"
      }
    })
  )
})