import csv

# takes in user's intended role and industry as well as job industry and industry role
def job_filter(user_industry, user_role, industry_role, job_industry):
            # Check if the user's job and industry matches that of the job posted
            if (user_industry == job_industry) and ( user_role == industry_role):
                return True
            else: 
                return False
     
    

 
