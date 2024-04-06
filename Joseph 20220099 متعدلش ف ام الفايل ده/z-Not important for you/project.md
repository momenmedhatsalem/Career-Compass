# Project 4(Job Search Website): <br/>

## A simple Job search application where company admin can add/edit/delete job opportunities and users can search/apply on them. The website should have 2 types of users: either a company admin or a user. Each can sign up and choose whether to be a company admin or a user.

<br/>


<div style="background-color: rgb(0, 225, 255);">

### Company admin can:

#### 1. Sign up (fill in form “username, password, confirm password, email and is_company_admin”, in case is_company_admin=True then add extra field for company name)
#### 2. Login
#### 3. Add new job opportunity (Job includes ID, job title, salary, company name, job status can hold one of the following values ”open, closed”, description and years of experience, created by logged-in admin)
#### 4. View list of created jobs by admin’s company.
#### 5. Select a job and edit its details.
#### 6. Delete a job
</div>
<br/>

<div style="background-color: rgb(0, 255, 34);">

### User can:

#### 1. Sign up (fill in form “username, password, confirm password, email and is_admin”)
#### 2. Login
#### 3. Search for tasks by job title or years of experience and results are displayed accordingly.
#### 4. View list of available jobs. 5. Select a job and view its details in a job page.
#### 5. Apply for a job.
#### 6. View list of applied jobs for that user.

#### \- Job search website should have a navigation bar.
#### \- The navigation bar should be adjusted dynamically based on the logged in user.
#### \- The navigation bar should be accessible from all web pages
</div>
<br/>
<br/>

<div dir="rtl">
المشروع 4 (موقع البحث عن الوظائف):
<br/>
تطبيق بسيط للبحث عن عمل حيث يمكن لمسؤول الشركة إضافة/تحرير/حذف فرص العمل ويمكن للمستخدمين البحث/التقدم عليها. يجب أن يحتوي موقع الويب على نوعين من المستخدمين: إما مسؤول الشركة أو المستخدم. يمكن لكل منهم التسجيل واختيار ما إذا كان مديرًا للشركة أو مستخدمًا.

<div style="background-color: rgb(0, 225, 255);">
يمكن لمسؤول الشركة:

١. قم بالتسجيل (املأ النموذج "اسم المستخدم وكلمة المرور وتأكيد كلمة المرور والبريد الإلكتروني وis_company_admin"، في حالة is_company_admin=True ثم قم بإضافة حقل إضافي لاسم الشركة)
<br/>
٢. تسجيل الدخول
<br/>
٣. إضافة فرصة عمل جديدة (الوظيفة تشمل الهوية، المسمى الوظيفي، الراتب، اسم الشركة، الحالة الوظيفية
احتفظ بإحدى القيم التالية "مفتوح، مغلق"، الوصف و سنوات من الخبرة، تم إنشاؤها بواسطة المشرف الذي قام بتسجيل الدخول)
٤. عرض قائمة الوظائف التي أنشأتها شركة المشرف.
<br/>
٥. حدد وظيفة وقم بتحرير تفاصيلها.
<br/>
٦. احذف مهمة
<br/>
</div>
<div style="background-color: rgb(0, 255, 34);">
يمكن للمستخدم:

١. قم بالتسجيل (املأ النموذج "اسم المستخدم وكلمة المرور وتأكيد كلمة المرور والبريد الإلكتروني وis_admin")
<br/>
٢. تسجيل الدخول
<br/>
٣. البحث عن المهام حسب المسمى الوظيفي أو سنوات الخبرة ويتم عرض النتائج بناء على ذلك.
<br/>
٤. عرض قائمة الوظائف المتاحة. 5. قم باختيار وظيفة وعرض تفاصيلها في صفحة الوظيفة.
<br/>
٥. التقدم لوظيفة.
<br/>
٦. عرض قائمة الوظائف المطبقة لذلك المستخدم.
</div>

\- يجب أن يحتوي موقع البحث عن الوظائف على شريط تنقل.
<br/>
\- يجب تعديل شريط التنقل ديناميكيًا بناءً على المستخدم الذي قام بتسجيل الدخول.
<br/>
\- يجب أن يكون شريط التنقل متاحًا للوصول من جميع صفحات الويب

</div>



<br/>
<div>

# 😩
# Task 4: Job Application Functionality
## Scenario 1: User applies for a job.
### Use Case: The user views the details of a job opportunity and clicks on the apply button. The user is prompted to confirm the application, and upon confirmation, the application is submitted. The applied job is added to the user's list of applied jobs.

يقوم المستخدم بعرض تفاصيل فرصة العمل وينقر على زر التقديم. يُطلب من المستخدم تأكيد الطلب، وبعد التأكيد يتم تقديم الطلب. تتم إضافة الوظيفة المطبقة إلى قائمة الوظائف المطبقة الخاصة بالمستخدم.



</div>
<br/>


<div>

# Task 5: Job Management Functionality
## Scenario 1: Company admin deletes a job opportunity.
### Use Case: The company admin logs in, navigates to the list of created jobs, selects a job to delete, and confirms the deletion. The selected job opportunity is removed from the database and is no longer displayed in the list of created jobs.


يقوم مسؤول الشركة بتسجيل الدخول، والانتقال إلى قائمة الوظائف التي تم إنشاؤها، واختيار وظيفة لحذفها، وتأكيد الحذف. تتم إزالة فرصة العمل المحددة من قاعدة البيانات ولم تعد معروضة في قائمة الوظائف التي تم إنشاؤها.
</div>
