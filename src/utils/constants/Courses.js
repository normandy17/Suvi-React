import NewJoinerLearning from '../../assets/NewJoinerLearning.png'
import InsuranceLearning from '../../assets/InsuranceLearning.png'
import LearningSapiensProducts from '../../assets/LearningSapiensProducts.png'
import DigitalEcosystem from '../../assets/DigitalEcosystem.png'
import TechnologyLearning from '../../assets/TechnologyLearning.png'
import ProcessLearning from '../../assets/ProcessLearning.png'
import PeopleSkills from '../../assets/PeopleSkills.png'
import Certification from '../../assets/Certification.png'
import LearningCalendar from '../../assets/LearningCalendar.png'

const learningGuides = [
    {
        title: 'New Joiner Learning',
        subTitle: '​​​​​​​New to Sapiens? All you need to start off.',
        image:NewJoinerLearning,
        to: 'https://sapiens365.sharepoint.com.mcas.ms/sites/GlobalLearning/SitePages/New%20Joiner%20Learning.aspx?McasTsid=20892'
    },
    {
        title: 'Insurance Learning',
        subTitle: 'Everything to know - from basics to advanced.',
        image:InsuranceLearning,
        to: 'https://sapiens365.sharepoint.com.mcas.ms/sites/GlobalLearning/SitePages/Insurance-Accounting.aspx?McasTsid=20892'
    },
    {
        title: 'Learning Sapiens Products',
        subTitle: 'Learn about the products and what you need for your role: developer, QA, Configurator or BA.',
        image:LearningSapiensProducts,
        to: 'https://sapiens365.sharepoint.com.mcas.ms/:u:/r/sites/GlobalTraining/SitePages/Product-specific-learning.aspx?csf=1&e=LtuIyu&McasTsid=20892'
    },
    {
        title: 'Digital Ecosystem',
        subTitle: 'Check out our Ecosystem partners, videos and presentations',
        image:DigitalEcosystem,
        to: 'https://sapiens365.sharepoint.com.mcas.ms/sites/GlobalLearning/SitePages/Digital-Eco-System.aspx?McasTsid=20892'
    },
    {
        title: 'Technology Learning',
        subTitle: 'Programming languages, productivity apps, office utilities, and more.',
        image:TechnologyLearning,
        to: 'https://sapiens365.sharepoint.com.mcas.ms/sites/GlobalLearning/SitePages/Technology-Courses.aspx?McasTsid=20892'
    },
    {
        title: 'Process Learning',
        subTitle: 'Learn methodologies & best practices for a wide range of Sapiens process',
        image:ProcessLearning,
        to: 'https://sapiens365.sharepoint.com.mcas.ms/sites/GlobalLearning/SitePages/Process-Courses.aspx?McasTsid=20892'
    },
    {
        title: 'People Skills',
        subTitle: 'Develop your interpersonal and leadership skills.',
        image:PeopleSkills,
        to: 'https://sapiens365.sharepoint.com.mcas.ms/sites/GlobalLearning/SitePages/Global-3c-Leadership-program.aspx?McasTsid=20892'
    },
]

const courses = [
    {
        title: 'Certification',
        subTitle: 'Get certified in a variety of skills ​​​​​​​and ​​​​​​​programming languages.',
        image:Certification,
        to: 'https://sapiens365.sharepoint.com.mcas.ms/sites/GlobalLearning/SitePages/Certificates.aspx?McasTsid=20892'
    },
    {
        title: 'Learning Calendar',
        subTitle: 'Check out our course schedule and build ​​​​​​​a ​​​​​​​schedule that works for you.',
        image:LearningCalendar,
        to: 'https://sapiens365.sharepoint.com.mcas.ms/sites/GlobalLearning/Lists/Learning%20Calendar/calendar.aspx?McasTsid=20892'
    },
]

const learningResources = [
    {
        title: 'Learning Library',
        subTitle: 'Leadership, methodology, products, technology, and more.',
        to: 'https://sapiens365.sharepoint.com.mcas.ms/sites/LearningMaterial?McasTsid=20892'
    },
    {
        title: 'Learning Management System',
        subTitle: 'Sapiens Learning Management System (LMS) is based on SAP SuccessFactors.',
        to: 'https://sapiens365.sharepoint.com.mcas.ms/sites/GlobalLearning/SitePages/Learning-Management-System.aspx?McasTsid=20892'
    },
    {
        title: 'Learning Video Platform',
        subTitle: 'Lots of videos on lots of topics to watch and learn on the go.',
        to: 'https://sapiens365.sharepoint.com.mcas.ms/sites/GlobalLearning/SitePages/Learning-Video-Platform.aspx?McasTsid=20892'
    },
    {
        title: '​​​​​​​Consulting Insights, Magazines',
        subTitle: 'Our curated list of external sites with the best info on insurance, tech, and markets.',
        to: 'https://sapiens365.sharepoint.com.mcas.ms/sites/GlobalLearning/SitePages/External-Sources.aspx?McasTsid=20892'
    },
    {
        title: 'Summits and Townhalls',
        subTitle: `Upcoming events so you can stay up-to-date with what's happening.`,
        to: 'https://sapiens365.sharepoint.com.mcas.ms/sites/GlobalLearning/SitePages/Learn%20With%20Fun.aspx?McasTsid=20892'
    },
    {
        title: 'Learn with Fun',
        subTitle: 'Our fun learning corner with games and puzzles based on insurance and technology.',
        to: 'https://sapiens365.sharepoint.com.mcas.ms/sites/GlobalLearning/SitePages/Learn%20With%20Fun.aspx?McasTsid=20892'
    },
]

const CardContent = [
    {
        heading: 'Learning Guides',
        subHeading: 'Travel guides for your learning journey',
        content: learningGuides,
        to:'#LearningGuides'
    },
    {
        to:'#Courses',
        heading: 'Courses',
        subHeading: 'Paths and Milestones',
        content: courses,
    },
    {
        to:'#Sources',
        heading: 'Sources',
        subHeading: '(Re)sources for learning',
        content: learningResources,
    },
    {
        to:'#Help',
        heading: 'Help',
    },
]

export default CardContent