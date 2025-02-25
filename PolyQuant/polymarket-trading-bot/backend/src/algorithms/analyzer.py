from typing import List, Dict

class MarketAnalyzer:
    def __init__(self, market_data: List[Dict]):
        self.market_data = market_data

    def analyze_market(self) -> Dict[str, float]:
        buy_side_weight = self.calculate_weight('buy')
        sell_side_weight = self.calculate_weight('sell')
        
        return {
            'buy_side_weight': buy_side_weight,
            'sell_side_weight': sell_side_weight,
            'market_trend': self.determine_trend(buy_side_weight, sell_side_weight)
        }

    def calculate_weight(self, side: str) -> float:
        total_weight = sum(item['weight'] for item in self.market_data if item['side'] == side)
        return total_weight / len(self.market_data) if self.market_data else 0

    def determine_trend(self, buy_weight: float, sell_weight: float) -> str:
        if buy_weight > sell_weight:
            return 'bullish'
        elif sell_weight > buy_weight:
            return 'bearish'
        else:
            return 'neutral'