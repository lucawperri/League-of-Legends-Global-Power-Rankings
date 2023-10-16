import boto3
import json

access_key = "AKIA24BVQUT6SDECAOGC"
secret_access_key = "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"
session = boto3.Session(
    aws_access_key_id=access_key,
    aws_secret_access_key=secret_access_key,
    region_name='us-east-2'
)

# Initialize DynamoDB table using the session
dynamodb = session.resource('dynamodb')
table = dynamodb.Table('League_tournment_data')

# Load the JSON data
with open('C:\\Users\\pathu\\OneDrive\\Desktop\\LeagueOfLegendsEsports\\esports-data\\tournaments.json', 'r') as file:
    data = json.load(file)

# Transform data and insert into DynamoDB table
for game in data:
    game_id = game['id']
    league_id = game['leagueId']
    game_name = game['name']
    slug = game['slug']
    sport = game['sport']
    start_date = game['startDate']
    end_date = game['endDate']

    # Extract "matches" from the JSON data
    matches = []
    stages = game.get('stages', [])
    for stage in stages:
        section = stage.get('sections', [])[0]
        section_matches = section.get('matches', [])
        matches.extend(section_matches)

    # For this example, we'll store matches as a JSON string, but you can adjust this based on your use case
    matches_json = json.dumps(matches)

    # Insert data into DynamoDB table
    table.put_item(
        Item={
            'id': game_id,
            'leagueId': league_id,
            'name': game_name,
            'slug': slug,
            'sport': sport,
            'startDate': start_date,
            'endDate': end_date,
            'matches': matches_json,  # Adjust data type as needed
        }
    )

    print(f"Inserted game with ID {game_id}")

print("Data insertion complete.")