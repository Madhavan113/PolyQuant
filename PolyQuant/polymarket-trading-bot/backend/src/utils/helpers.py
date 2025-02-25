def format_market_data(data):
    # Function to format market data for storage or display
    formatted_data = {
        "id": data.get("id"),
        "name": data.get("name"),
        "outcome": data.get("outcome"),
        "price": data.get("price"),
        "volume": data.get("volume"),
        "created_at": data.get("created_at"),
    }
    return formatted_data

def log_message(message):
    # Function to log messages to the console
    print(f"[LOG] {message}")

def calculate_percentage(part, whole):
    # Function to calculate percentage
    if whole == 0:
        return 0
    return (part / whole) * 100