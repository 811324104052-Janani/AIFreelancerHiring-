# Problem Statement

## 1. Title

**AI-Powered Freelancer Hiring and Project Management Platform**

## 2. Domain

**Freelancing, Recruitment, AI-Based Recommendation, Project Management, FinTech, and Cybersecurity**

## 3. Who is the User? (2–3 User Types, with Roles)

### 1. Client

* Creates an account and posts job requirements.
* Searches and receives AI-recommended freelancers.
* Reviews applications, hires freelancers, manages projects, and provides ratings.

### 2. Freelancer

* Creates a professional profile with skills, experience, portfolio, and availability.
* Searches for suitable jobs and submits proposals.
* Manages assigned projects, milestones, deadlines, and work progress.

### 3. Admin

* Manages users, jobs, projects, and reported activities.
* Monitors suspicious/fake accounts and fraudulent activities.
* Handles disputes and maintains platform security.

## 4. What Problem Are We Solving?

Finding the right freelancer for a job is often time-consuming because clients have to manually compare numerous freelancer profiles, skills, ratings, and previous work. At the same time, skilled freelancers may struggle to discover jobs that closely match their expertise. Existing platforms can also face challenges such as fake profiles, unreliable performance, project delays, and transaction-related risks.

For example, a client looking for a **Java Spring Boot developer** may receive hundreds of applications and spend hours identifying suitable candidates. Our platform solves this problem by using **AI-based job–freelancer matching and performance scoring** to recommend the most suitable freelancers while providing secure user management and project tracking.

## 5. Proposed Solution

The proposed application is a full-stack freelancer hiring platform that connects clients with freelancers and manages the complete project lifecycle.

### Key Features

* **User Registration & Login**

  * Separate Client, Freelancer, and Admin accounts.
  * Secure authentication and role-based authorization.

* **Freelancer Profile**

  * Skills, experience, portfolio, hourly/project rate, availability, and ratings.

* **Job Posting**

  * Clients can create jobs with required skills, budget, deadline, and job description.

* **AI-Based Freelancer–Job Matching**

  * Analyze job requirements and freelancer profiles.
  * Generate a compatibility/matching score.
  * Recommend the most suitable freelancers.

* **Application & Proposal Management**

  * Freelancers can apply for jobs and submit proposals.
  * Clients can review, shortlist, reject, or hire applicants.

* **AI-Based Performance Scoring**

  * Calculate freelancer performance using ratings, completed projects, delivery time, client feedback, and success rate.

* **Project & Milestone Tracking**

  * Create milestones, assign tasks, set deadlines, and monitor project progress.

* **Secure Transactions**

  * Maintain transaction records and payment status.
  * Protect sensitive transaction information.

* **Fake/Suspicious Account Detection**

  * Identify suspicious profiles and unusual account activity.
  * Allow admins to review and take appropriate action.

* **Ratings & Reviews**

  * Clients can rate freelancers after project completion.
  * Freelancer performance scores are updated based on project history.

* **Notifications**

  * Notify users about applications, hiring, milestones, deadlines, and project updates.

* **Admin Dashboard**

  * Manage users, jobs, applications, projects, reports, and suspicious activities.

## 6. Core Entities / Database Tables

The major database tables are:

1. **Users**

   * user_id, name, email, password, role, status

2. **Freelancer_Profile**

   * freelancer_id, user_id, skills, experience, hourly_rate, availability

3. **Client_Profile**

   * client_id, user_id, company_name, description

4. **Jobs**

   * job_id, client_id, title, description, required_skills, budget, deadline, status

5. **Applications**

   * application_id, job_id, freelancer_id, proposal, proposed_price, status

6. **Projects**

   * project_id, job_id, client_id, freelancer_id, start_date, deadline, status

7. **Milestones**

   * milestone_id, project_id, title, description, deadline, status

8. **Tasks**

   * task_id, milestone_id, title, description, assigned_to, status

9. **Payments**

   * payment_id, project_id, amount, payment_status, transaction_date

10. **Ratings_Reviews**

* review_id, project_id, reviewer_id, freelancer_id, rating, comments

11. **Performance_Scores**

* score_id, freelancer_id, rating_score, completion_score, delivery_score, overall_score

12. **Notifications**

* notification_id, user_id, message, type, is_read

13. **Reports**

* report_id, reported_user_id, reporter_id, reason, status

## 7. User Roles & Permissions

| Feature                    | Client | Freelancer | Admin |
| -------------------------- | ------ | ---------- | ----- |
| Register/Login             | ✅      | ✅          | ✅     |
| Manage Profile             | ✅      | ✅          | ✅     |
| Post Jobs                  | ✅      | ❌          | ✅     |
| Search Jobs                | ✅      | ✅          | ✅     |
| Apply for Jobs             | ❌      | ✅          | ✅     |
| Review Applications        | ✅      | ❌          | ✅     |
| Hire Freelancer            | ✅      | ❌          | ✅     |
| Manage Projects            | ✅      | ✅          | ✅     |
| Update Tasks               | ❌      | ✅          | ✅     |
| Track Project Progress     | ✅      | ✅          | ✅     |
| Give Rating/Review         | ✅      | ❌          | ✅     |
| View Performance Score     | ❌      | ✅          | ✅     |
| Manage Users               | ❌      | ❌          | ✅     |
| Review Suspicious Accounts | ❌      | ❌          | ✅     |
| Manage Reports             | ❌      | ❌          | ✅     |

## 8. Success Criteria

The application will be considered successful if:

* A new user can **register and log in within 1 minute**.
* A client can **post a job within 2 minutes**.
* A freelancer can **search and apply for a suitable job within 2 minutes**.
* The AI system can generate a **ranked list of suitable freelancers** for a job.
* A client can review applications and hire a freelancer through the platform.
* Users can track **project progress, milestones, and deadlines**.
* The system calculates a freelancer's performance score based on defined metrics.
* Suspicious user activity can be flagged for **admin review**.
* All users can access only the features permitted by their roles.
* Project, application, user, and transaction data is stored reliably in the database.

## 9. Out of Scope

To keep the project achievable within the development period, the following features will **not** be implemented:

* Real-world bank account integration.
* Cryptocurrency payments.
* International tax calculation and tax filing.
* Video/audio calling between clients and freelancers.
* Full-scale legal contract generation.
* Advanced biometric identity verification.
* Complex payroll management.
* Real-world dispute resolution by external authorities.
* Building a production-scale payment gateway from scratch.
* Guaranteed detection of every fake or fraudulent account.
* Fully autonomous AI hiring without client approval.

The project will instead demonstrate **secure transaction workflows, AI-based recommendations, suspicious-account flagging, and project management** using a controlled prototype environment.

## 10. Chosen Track

### **Java – Spring Boot**

**Frontend:** React.js / HTML, CSS, JavaScript
**Backend:** Java Spring Boot
**Database:** MySQL
**AI/ML Module:** Python-based AI service integrated with the Spring Boot backend through REST APIs
**Authentication:** Spring Security + JWT
**Cloud Deployment:** AWS / Render / Railway
**API Communication:** REST APIs
