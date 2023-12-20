import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects:any = [

    {
      id: 11,
      title: 'Personal Portfolio Using Angular',
      desc: '',
      livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
      githurl: 'https://github.com/mehulk05/Personal-Portfolio-Angular-Updated',
      mediumlink: 'https://javascript.plainenglish.io/personal-portfolio-using-angular-8-and-bootstrap-5dde6fc7cf9b',
      imgUrl: 'assets/images/z11.png',
      tech: 'Angular ,Bootstrap'
    }



  ]
  about2 = `Software Developer with 4+ years of experience .
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
  Expertise in Angular 2+ All versions and UI with Responsive Designs .
  Have good understanding of Java8, SpringBoot, Bootstrap, Camunda, REST, and MYSQL`

  about = "Lover of innovation and everything related to generate new knowledge.Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do."
  resumeurl = "https://docs.google.com/document/d/1rJxOMjxEBAwVmJoO2Vu1HYQYVQETBQOfW3qMUfB6lIQ/edit?usp=sharing"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR 2+',
      'progress': '95%'
    },
    {
      'id': '2',
      'skill': 'NODE JS',
      'progress': '80%'
    },
    {
      'id': '3',
      'skill': 'JAVA 8',
      'progress': '60%'
    },
    {
      'id': '4',
      'skill': 'SQL , MYSQL, Hasura',
      'progress': '75%'
    },
    {
      'id': '5',
      'skill': 'Spring Boot',
      'progress': '60%'
    },
    {
      'id': '6',
      'skill': 'REST',
      'progress': '70%'
    }
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2014 - 2018',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Engineering',
      'info': `Oriental College of Technology, Bhopal, Madhya Pradesh
Completed B.E in Computer Engineering.`,
      'institution': 'ORIENTAL COLLEGE OF TECHNOLOGY, BHOPAL, MADHYA PRADESH'
    },
    {
      'id': '2',
      'from_to_year': '2012 - 2014',
      'education': 'Higher Secondary',
      'stream': 'Science and Mathematics',
      'institution': 'Kendriya Vidyalaya, Ramgarh, Jharkhand',
      'info': `The High School was mainly focus on the bases of science, mathematics, and Chemistry
There was also a good base on physics, mathematics and chemistry.
`
    },
    {
      'id': '3',
      'from_to_year': '2010 - 2012',
      'education': 'Secondary  School',
      'stream': 'Science and Mathematics',
      'institution': 'MIPS JEHANABAD',
      'info': `The Secondary aims at Maths , English , Science, Social Science, Litrature and Languages.
`
    }
  ];
  exprienceData: any = [
    {
      id: 3,
      company: 'Optum Global Solution',
      location: 'Gurugram, Haryana',
      timeline: 'March 2023 - Present',
      role: 'Senior Software Developer',
      work: 'Working as a full stack developer for the product. Responsible for adding the new featurs in the existing product.'

    },
    {
      id: 2,
      company: 'ITC InfoTech',
      location: 'Pune, Maharastra',
      timeline: 'July 2021 - Feb 2023',
      role: 'Software Developer',
      work: `Technologies : Angular 9, JIRA, Rest Services, My SQL server, Java, Bit Bucket, Jenkins .
      Worked on the web application built in Angular for Kotak Mahindra Bank .
      Contributed on developing the admin dashboard with different charts and insights for the application.`
    },
    {
      id: 1,
      company: 'Cognizant Technoloy Solutions',
      location: 'Pune, Maharastra',
      timeline: 'Nov 2018 - June 2021',
      role: 'Programmer Analyst',
      work: `Technologies : Angular , JavaSpring Boot , SQL. Apache Solr, HTML , CSS , GIT .

  Project 1 : Developing Backend Using Spring Boot with Java-8 .

  Project 2 : Development of UI using Angular and third-party libraries to achieve a stable and working application to support the collection
  of data.
  `
    },


  ]

  extraCircularInfo: any = [
    {
      id:1,
      title: 'Github',
      description: '',
      img: 'assets/images/Priyadarshini.png',
      url: 'https://github.com/priya240896'
    }
  ]
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }

  extraCircular(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.extraCircularInfo;
  }
}
