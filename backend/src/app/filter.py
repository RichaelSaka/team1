import csv

# takes in user's intended role and industry as well as csv file where stuff is stored
def job_filter(user_industry, user_role, file_path = job_data.csv):
    matching_jobs = []
    # Read the jobs database file
    with open(file_path, mode='r', newline='', encoding='utf-8') as file:
        reader = csv.DictReader(file)

        # Iterate through each row in the CSV
        for row in reader:
            # Check if the row matches the intended role and industry
            if (user_industry == row['industry']) and (user_role == row['role']):
                matching_jobs.append(row)
    # returns the list of roles that match user's information
    return matching_jobs        
    

 