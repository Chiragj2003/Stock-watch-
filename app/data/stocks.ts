export interface Stock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  marketCap: string;
  marketCapValue: number; // Numeric value for sorting/filtering
  sector: string;
  market: 'US' | 'IN';
  currency: string;
  capCategory: 'large' | 'mid' | 'small';
}

export interface RecommendedStock extends Stock {
  recommendation: 'Strong Buy' | 'Buy' | 'Hold';
  targetPrice: number;
  analystRating: number;
  growthPotential: number;
  reason: string;
  aiScore: number;
  riskLevel: 'Low' | 'Medium' | 'High';
  momentum: 'Bullish' | 'Neutral' | 'Bearish';
  technicalSignal: string;
  fundamentalScore: number;
  sentimentScore: number;
}

// US Stock Market Data - Extended
export const usStocksData: Stock[] = [
  // Technology - Large Cap
  { symbol: 'AAPL', name: 'Apple Inc.', price: 178.52, change: 2.34, changePercent: 1.33, volume: 52345678, marketCap: '2.8T', marketCapValue: 2800, sector: 'Technology', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'MSFT', name: 'Microsoft Corporation', price: 378.91, change: 4.56, changePercent: 1.22, volume: 23456789, marketCap: '2.8T', marketCapValue: 2800, sector: 'Technology', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 141.80, change: -1.23, changePercent: -0.86, volume: 18765432, marketCap: '1.8T', marketCapValue: 1800, sector: 'Technology', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 178.25, change: 3.45, changePercent: 1.97, volume: 34567890, marketCap: '1.8T', marketCapValue: 1800, sector: 'Consumer Cyclical', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'NVDA', name: 'NVIDIA Corporation', price: 495.22, change: 12.34, changePercent: 2.56, volume: 45678901, marketCap: '1.2T', marketCapValue: 1200, sector: 'Technology', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'META', name: 'Meta Platforms Inc.', price: 505.95, change: 8.76, changePercent: 1.76, volume: 15678901, marketCap: '1.3T', marketCapValue: 1300, sector: 'Technology', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'TSLA', name: 'Tesla Inc.', price: 248.50, change: -5.67, changePercent: -2.23, volume: 67890123, marketCap: '790B', marketCapValue: 790, sector: 'Consumer Cyclical', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'AMD', name: 'Advanced Micro Devices', price: 138.92, change: 5.43, changePercent: 4.07, volume: 56789012, marketCap: '225B', marketCapValue: 225, sector: 'Technology', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'INTC', name: 'Intel Corporation', price: 45.23, change: -0.87, changePercent: -1.89, volume: 34567890, marketCap: '192B', marketCapValue: 192, sector: 'Technology', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'CRM', name: 'Salesforce Inc.', price: 265.34, change: 2.87, changePercent: 1.09, volume: 3456789, marketCap: '255B', marketCapValue: 255, sector: 'Technology', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'ORCL', name: 'Oracle Corporation', price: 118.45, change: 1.56, changePercent: 1.33, volume: 8765432, marketCap: '325B', marketCapValue: 325, sector: 'Technology', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'CSCO', name: 'Cisco Systems Inc.', price: 52.34, change: 0.45, changePercent: 0.87, volume: 12345678, marketCap: '215B', marketCapValue: 215, sector: 'Technology', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'IBM', name: 'International Business Machines', price: 162.78, change: 1.23, changePercent: 0.76, volume: 3456789, marketCap: '148B', marketCapValue: 148, sector: 'Technology', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'ADBE', name: 'Adobe Inc.', price: 578.90, change: 7.89, changePercent: 1.38, volume: 2345678, marketCap: '265B', marketCapValue: 265, sector: 'Technology', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'NOW', name: 'ServiceNow Inc.', price: 712.45, change: 12.34, changePercent: 1.76, volume: 987654, marketCap: '145B', marketCapValue: 145, sector: 'Technology', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'QCOM', name: 'Qualcomm Inc.', price: 145.67, change: 2.34, changePercent: 1.63, volume: 6789012, marketCap: '163B', marketCapValue: 163, sector: 'Technology', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'AVGO', name: 'Broadcom Inc.', price: 1123.45, change: 23.45, changePercent: 2.13, volume: 1234567, marketCap: '520B', marketCapValue: 520, sector: 'Technology', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'TXN', name: 'Texas Instruments', price: 178.90, change: 1.56, changePercent: 0.88, volume: 3456789, marketCap: '163B', marketCapValue: 163, sector: 'Technology', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'MU', name: 'Micron Technology', price: 89.34, change: 3.21, changePercent: 3.73, volume: 12345678, marketCap: '99B', marketCapValue: 99, sector: 'Technology', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'PLTR', name: 'Palantir Technologies', price: 23.45, change: 1.23, changePercent: 5.54, volume: 45678901, marketCap: '52B', marketCapValue: 52, sector: 'Technology', market: 'US', currency: '$', capCategory: 'large' },
  
  // Mid Cap Tech
  { symbol: 'CRWD', name: 'CrowdStrike Holdings', price: 234.56, change: 5.67, changePercent: 2.48, volume: 2345678, marketCap: '56B', marketCapValue: 56, sector: 'Technology', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'ZS', name: 'Zscaler Inc.', price: 189.45, change: 4.56, changePercent: 2.47, volume: 1234567, marketCap: '28B', marketCapValue: 28, sector: 'Technology', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'DDOG', name: 'Datadog Inc.', price: 123.45, change: 3.21, changePercent: 2.67, volume: 3456789, marketCap: '40B', marketCapValue: 40, sector: 'Technology', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'NET', name: 'Cloudflare Inc.', price: 78.90, change: 2.34, changePercent: 3.06, volume: 4567890, marketCap: '26B', marketCapValue: 26, sector: 'Technology', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'SNOW', name: 'Snowflake Inc.', price: 178.90, change: 4.56, changePercent: 2.62, volume: 2345678, marketCap: '58B', marketCapValue: 58, sector: 'Technology', market: 'US', currency: '$', capCategory: 'large' },
  
  // Small/Mid Cap Tech
  { symbol: 'PATH', name: 'UiPath Inc.', price: 18.45, change: 0.67, changePercent: 3.77, volume: 5678901, marketCap: '10B', marketCapValue: 10, sector: 'Technology', market: 'US', currency: '$', capCategory: 'mid' },
  { symbol: 'DOCN', name: 'DigitalOcean Holdings', price: 34.56, change: 1.23, changePercent: 3.69, volume: 1234567, marketCap: '3.2B', marketCapValue: 3.2, sector: 'Technology', market: 'US', currency: '$', capCategory: 'mid' },
  { symbol: 'ESTC', name: 'Elastic NV', price: 112.34, change: 3.45, changePercent: 3.17, volume: 987654, marketCap: '11B', marketCapValue: 11, sector: 'Technology', market: 'US', currency: '$', capCategory: 'large' },
  
  // Financial Services
  { symbol: 'BRK.B', name: 'Berkshire Hathaway', price: 363.14, change: 1.23, changePercent: 0.34, volume: 3456789, marketCap: '790B', marketCapValue: 790, sector: 'Financial Services', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'JPM', name: 'JPMorgan Chase & Co.', price: 172.96, change: 2.15, changePercent: 1.26, volume: 8765432, marketCap: '498B', marketCapValue: 498, sector: 'Financial Services', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'V', name: 'Visa Inc.', price: 261.44, change: 1.87, changePercent: 0.72, volume: 5678901, marketCap: '538B', marketCapValue: 538, sector: 'Financial Services', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'MA', name: 'Mastercard Inc.', price: 421.35, change: 3.21, changePercent: 0.77, volume: 2345678, marketCap: '395B', marketCapValue: 395, sector: 'Financial Services', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'BAC', name: 'Bank of America Corp', price: 34.56, change: 0.45, changePercent: 1.32, volume: 34567890, marketCap: '270B', marketCapValue: 270, sector: 'Financial Services', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'WFC', name: 'Wells Fargo & Co.', price: 48.90, change: 0.67, changePercent: 1.39, volume: 15678901, marketCap: '177B', marketCapValue: 177, sector: 'Financial Services', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'GS', name: 'Goldman Sachs Group', price: 378.45, change: 4.56, changePercent: 1.22, volume: 2345678, marketCap: '123B', marketCapValue: 123, sector: 'Financial Services', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'MS', name: 'Morgan Stanley', price: 89.67, change: 1.23, changePercent: 1.39, volume: 6789012, marketCap: '145B', marketCapValue: 145, sector: 'Financial Services', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'AXP', name: 'American Express Co.', price: 187.34, change: 2.34, changePercent: 1.26, volume: 2345678, marketCap: '138B', marketCapValue: 138, sector: 'Financial Services', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'PYPL', name: 'PayPal Holdings Inc.', price: 62.45, change: -1.23, changePercent: -1.93, volume: 12345678, marketCap: '68B', marketCapValue: 68, sector: 'Financial Services', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'SQ', name: 'Block Inc.', price: 67.89, change: 2.34, changePercent: 3.57, volume: 8765432, marketCap: '42B', marketCapValue: 42, sector: 'Financial Services', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'COIN', name: 'Coinbase Global Inc.', price: 178.90, change: 8.45, changePercent: 4.96, volume: 6789012, marketCap: '42B', marketCapValue: 42, sector: 'Financial Services', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'SOFI', name: 'SoFi Technologies', price: 8.45, change: 0.34, changePercent: 4.19, volume: 23456789, marketCap: '8B', marketCapValue: 8, sector: 'Financial Services', market: 'US', currency: '$', capCategory: 'mid' },
  { symbol: 'HOOD', name: 'Robinhood Markets', price: 12.34, change: 0.56, changePercent: 4.75, volume: 15678901, marketCap: '11B', marketCapValue: 11, sector: 'Financial Services', market: 'US', currency: '$', capCategory: 'large' },
  
  // Healthcare
  { symbol: 'JNJ', name: 'Johnson & Johnson', price: 156.74, change: -0.45, changePercent: -0.29, volume: 6789012, marketCap: '378B', marketCapValue: 378, sector: 'Healthcare', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'UNH', name: 'UnitedHealth Group', price: 527.89, change: 5.67, changePercent: 1.09, volume: 3456789, marketCap: '485B', marketCapValue: 485, sector: 'Healthcare', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'PFE', name: 'Pfizer Inc.', price: 28.45, change: -0.34, changePercent: -1.18, volume: 34567890, marketCap: '160B', marketCapValue: 160, sector: 'Healthcare', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'ABBV', name: 'AbbVie Inc.', price: 154.67, change: 1.89, changePercent: 1.24, volume: 5678901, marketCap: '273B', marketCapValue: 273, sector: 'Healthcare', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'MRK', name: 'Merck & Co. Inc.', price: 106.78, change: 0.89, changePercent: 0.84, volume: 8765432, marketCap: '270B', marketCapValue: 270, sector: 'Healthcare', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'LLY', name: 'Eli Lilly and Company', price: 589.34, change: 12.45, changePercent: 2.16, volume: 2345678, marketCap: '560B', marketCapValue: 560, sector: 'Healthcare', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'TMO', name: 'Thermo Fisher Scientific', price: 534.56, change: 4.56, changePercent: 0.86, volume: 1234567, marketCap: '210B', marketCapValue: 210, sector: 'Healthcare', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'BMY', name: 'Bristol-Myers Squibb', price: 51.23, change: 0.45, changePercent: 0.89, volume: 12345678, marketCap: '104B', marketCapValue: 104, sector: 'Healthcare', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'AMGN', name: 'Amgen Inc.', price: 278.90, change: 2.34, changePercent: 0.85, volume: 2345678, marketCap: '149B', marketCapValue: 149, sector: 'Healthcare', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'GILD', name: 'Gilead Sciences Inc.', price: 78.45, change: 0.67, changePercent: 0.86, volume: 6789012, marketCap: '98B', marketCapValue: 98, sector: 'Healthcare', market: 'US', currency: '$', capCategory: 'large' },
  
  // Consumer
  { symbol: 'WMT', name: 'Walmart Inc.', price: 163.42, change: 1.56, changePercent: 0.96, volume: 7890123, marketCap: '440B', marketCapValue: 440, sector: 'Consumer Defensive', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'PG', name: 'Procter & Gamble', price: 152.89, change: 0.98, changePercent: 0.65, volume: 5432109, marketCap: '360B', marketCapValue: 360, sector: 'Consumer Defensive', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'KO', name: 'Coca-Cola Company', price: 59.78, change: 0.34, changePercent: 0.57, volume: 12345678, marketCap: '258B', marketCapValue: 258, sector: 'Consumer Defensive', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'PEP', name: 'PepsiCo Inc.', price: 169.45, change: 1.23, changePercent: 0.73, volume: 4567890, marketCap: '233B', marketCapValue: 233, sector: 'Consumer Defensive', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'COST', name: 'Costco Wholesale Corp', price: 589.34, change: 5.67, changePercent: 0.97, volume: 1234567, marketCap: '262B', marketCapValue: 262, sector: 'Consumer Defensive', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'HD', name: 'Home Depot Inc.', price: 345.67, change: 4.32, changePercent: 1.27, volume: 3210987, marketCap: '345B', marketCapValue: 345, sector: 'Consumer Cyclical', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'MCD', name: 'McDonalds Corporation', price: 293.45, change: 2.34, changePercent: 0.80, volume: 2345678, marketCap: '215B', marketCapValue: 215, sector: 'Consumer Cyclical', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'NKE', name: 'Nike Inc.', price: 106.78, change: -1.23, changePercent: -1.14, volume: 5678901, marketCap: '163B', marketCapValue: 163, sector: 'Consumer Cyclical', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'SBUX', name: 'Starbucks Corporation', price: 98.45, change: 0.89, changePercent: 0.91, volume: 6789012, marketCap: '113B', marketCapValue: 113, sector: 'Consumer Cyclical', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'TGT', name: 'Target Corporation', price: 142.34, change: 1.56, changePercent: 1.11, volume: 4567890, marketCap: '66B', marketCapValue: 66, sector: 'Consumer Defensive', market: 'US', currency: '$', capCategory: 'large' },
  
  // Communication Services
  { symbol: 'DIS', name: 'Walt Disney Co.', price: 95.43, change: -1.12, changePercent: -1.16, volume: 8765432, marketCap: '175B', marketCapValue: 175, sector: 'Communication Services', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'NFLX', name: 'Netflix Inc.', price: 485.67, change: 7.89, changePercent: 1.65, volume: 4321098, marketCap: '210B', marketCapValue: 210, sector: 'Communication Services', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'CMCSA', name: 'Comcast Corporation', price: 43.56, change: 0.45, changePercent: 1.04, volume: 15678901, marketCap: '170B', marketCapValue: 170, sector: 'Communication Services', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'T', name: 'AT&T Inc.', price: 17.89, change: 0.12, changePercent: 0.68, volume: 34567890, marketCap: '128B', marketCapValue: 128, sector: 'Communication Services', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'VZ', name: 'Verizon Communications', price: 38.45, change: 0.23, changePercent: 0.60, volume: 15678901, marketCap: '162B', marketCapValue: 162, sector: 'Communication Services', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'SPOT', name: 'Spotify Technology', price: 189.45, change: 4.56, changePercent: 2.47, volume: 2345678, marketCap: '37B', marketCapValue: 37, sector: 'Communication Services', market: 'US', currency: '$', capCategory: 'large' },
  
  // Energy
  { symbol: 'XOM', name: 'Exxon Mobil Corp', price: 104.56, change: 1.23, changePercent: 1.19, volume: 15678901, marketCap: '418B', marketCapValue: 418, sector: 'Energy', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'CVX', name: 'Chevron Corporation', price: 148.90, change: 1.56, changePercent: 1.06, volume: 6789012, marketCap: '280B', marketCapValue: 280, sector: 'Energy', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'COP', name: 'ConocoPhillips', price: 112.34, change: 1.89, changePercent: 1.71, volume: 5678901, marketCap: '134B', marketCapValue: 134, sector: 'Energy', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'SLB', name: 'Schlumberger Ltd', price: 52.34, change: 0.78, changePercent: 1.51, volume: 8765432, marketCap: '75B', marketCapValue: 75, sector: 'Energy', market: 'US', currency: '$', capCategory: 'large' },
  
  // Industrial
  { symbol: 'CAT', name: 'Caterpillar Inc.', price: 289.45, change: 3.45, changePercent: 1.21, volume: 2345678, marketCap: '148B', marketCapValue: 148, sector: 'Industrial', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'BA', name: 'Boeing Company', price: 213.45, change: -2.34, changePercent: -1.08, volume: 5678901, marketCap: '128B', marketCapValue: 128, sector: 'Industrial', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'HON', name: 'Honeywell International', price: 198.67, change: 1.89, changePercent: 0.96, volume: 2345678, marketCap: '130B', marketCapValue: 130, sector: 'Industrial', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'UPS', name: 'United Parcel Service', price: 156.78, change: 1.23, changePercent: 0.79, volume: 3456789, marketCap: '135B', marketCapValue: 135, sector: 'Industrial', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'RTX', name: 'RTX Corporation', price: 89.45, change: 0.78, changePercent: 0.88, volume: 4567890, marketCap: '133B', marketCapValue: 133, sector: 'Industrial', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'LMT', name: 'Lockheed Martin Corp', price: 456.78, change: 4.56, changePercent: 1.01, volume: 1234567, marketCap: '115B', marketCapValue: 115, sector: 'Industrial', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'GE', name: 'General Electric Co', price: 123.45, change: 2.34, changePercent: 1.93, volume: 6789012, marketCap: '135B', marketCapValue: 135, sector: 'Industrial', market: 'US', currency: '$', capCategory: 'large' },
  { symbol: 'DE', name: 'Deere & Company', price: 389.45, change: 4.56, changePercent: 1.18, volume: 1234567, marketCap: '113B', marketCapValue: 113, sector: 'Industrial', market: 'US', currency: '$', capCategory: 'large' },
];

// Indian Stock Market Data (NSE) - Extended with Market Cap Categories
export const indianStocksData: Stock[] = [
  // Large Cap - Nifty 50 (>₹50,000 Cr)
  { symbol: 'RELIANCE', name: 'Reliance Industries', price: 2456.75, change: 34.50, changePercent: 1.42, volume: 12345678, marketCap: '16.6L Cr', marketCapValue: 1660000, sector: 'Energy', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'TCS', name: 'Tata Consultancy Services', price: 3892.40, change: 45.20, changePercent: 1.17, volume: 2345678, marketCap: '14.2L Cr', marketCapValue: 1420000, sector: 'Technology', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'HDFCBANK', name: 'HDFC Bank Ltd', price: 1678.90, change: 23.45, changePercent: 1.42, volume: 8765432, marketCap: '12.8L Cr', marketCapValue: 1280000, sector: 'Financial Services', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'INFY', name: 'Infosys Ltd', price: 1567.25, change: -12.30, changePercent: -0.78, volume: 5678901, marketCap: '6.5L Cr', marketCapValue: 650000, sector: 'Technology', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'ICICIBANK', name: 'ICICI Bank Ltd', price: 1023.45, change: 15.67, changePercent: 1.55, volume: 9876543, marketCap: '7.2L Cr', marketCapValue: 720000, sector: 'Financial Services', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'HINDUNILVR', name: 'Hindustan Unilever', price: 2567.80, change: -18.90, changePercent: -0.73, volume: 1234567, marketCap: '6.0L Cr', marketCapValue: 600000, sector: 'Consumer Goods', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'SBIN', name: 'State Bank of India', price: 628.35, change: 8.45, changePercent: 1.36, volume: 23456789, marketCap: '5.6L Cr', marketCapValue: 560000, sector: 'Financial Services', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'BHARTIARTL', name: 'Bharti Airtel Ltd', price: 1156.70, change: 21.30, changePercent: 1.88, volume: 4567890, marketCap: '6.9L Cr', marketCapValue: 690000, sector: 'Telecom', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'ITC', name: 'ITC Ltd', price: 465.25, change: 5.60, changePercent: 1.22, volume: 15678901, marketCap: '5.8L Cr', marketCapValue: 580000, sector: 'Consumer Goods', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'KOTAKBANK', name: 'Kotak Mahindra Bank', price: 1834.50, change: -25.30, changePercent: -1.36, volume: 2345678, marketCap: '3.6L Cr', marketCapValue: 360000, sector: 'Financial Services', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'LT', name: 'Larsen & Toubro', price: 3245.60, change: 56.78, changePercent: 1.78, volume: 1567890, marketCap: '4.5L Cr', marketCapValue: 450000, sector: 'Infrastructure', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'AXISBANK', name: 'Axis Bank Ltd', price: 1098.75, change: 12.34, changePercent: 1.14, volume: 6789012, marketCap: '3.4L Cr', marketCapValue: 340000, sector: 'Financial Services', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'WIPRO', name: 'Wipro Ltd', price: 478.90, change: -5.67, changePercent: -1.17, volume: 4567890, marketCap: '2.6L Cr', marketCapValue: 260000, sector: 'Technology', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'BAJFINANCE', name: 'Bajaj Finance Ltd', price: 7234.50, change: 123.45, changePercent: 1.74, volume: 987654, marketCap: '4.5L Cr', marketCapValue: 450000, sector: 'Financial Services', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'HCLTECH', name: 'HCL Technologies', price: 1345.60, change: 18.90, changePercent: 1.42, volume: 2345678, marketCap: '3.7L Cr', marketCapValue: 370000, sector: 'Technology', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'MARUTI', name: 'Maruti Suzuki India', price: 10567.80, change: 145.30, changePercent: 1.39, volume: 567890, marketCap: '3.3L Cr', marketCapValue: 330000, sector: 'Automobile', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'SUNPHARMA', name: 'Sun Pharmaceutical', price: 1189.45, change: 23.56, changePercent: 2.02, volume: 3456789, marketCap: '2.9L Cr', marketCapValue: 290000, sector: 'Healthcare', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'TATAMOTORS', name: 'Tata Motors Ltd', price: 789.50, change: 15.67, changePercent: 2.02, volume: 12345678, marketCap: '2.9L Cr', marketCapValue: 290000, sector: 'Automobile', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'TATASTEEL', name: 'Tata Steel Ltd', price: 134.25, change: 2.45, changePercent: 1.86, volume: 23456789, marketCap: '1.7L Cr', marketCapValue: 170000, sector: 'Metals', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'ADANIENT', name: 'Adani Enterprises', price: 2890.45, change: -45.67, changePercent: -1.56, volume: 4567890, marketCap: '3.3L Cr', marketCapValue: 330000, sector: 'Conglomerate', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'POWERGRID', name: 'Power Grid Corp', price: 278.90, change: 4.56, changePercent: 1.66, volume: 8765432, marketCap: '2.6L Cr', marketCapValue: 260000, sector: 'Utilities', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'NTPC', name: 'NTPC Ltd', price: 356.75, change: 6.78, changePercent: 1.94, volume: 12345678, marketCap: '3.5L Cr', marketCapValue: 350000, sector: 'Utilities', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'ONGC', name: 'Oil & Natural Gas Corp', price: 267.80, change: 3.45, changePercent: 1.31, volume: 9876543, marketCap: '3.4L Cr', marketCapValue: 340000, sector: 'Energy', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'JSWSTEEL', name: 'JSW Steel Ltd', price: 867.90, change: 12.34, changePercent: 1.44, volume: 5678901, marketCap: '2.1L Cr', marketCapValue: 210000, sector: 'Metals', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'ASIANPAINT', name: 'Asian Paints Ltd', price: 3245.60, change: 34.56, changePercent: 1.08, volume: 987654, marketCap: '3.1L Cr', marketCapValue: 310000, sector: 'Consumer Goods', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'BAJAJFINSV', name: 'Bajaj Finserv Ltd', price: 1567.80, change: 23.45, changePercent: 1.52, volume: 1234567, marketCap: '2.5L Cr', marketCapValue: 250000, sector: 'Financial Services', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'TITAN', name: 'Titan Company Ltd', price: 3456.70, change: 45.67, changePercent: 1.34, volume: 876543, marketCap: '3.1L Cr', marketCapValue: 310000, sector: 'Consumer Goods', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'NESTLEIND', name: 'Nestle India Ltd', price: 24567.80, change: 234.56, changePercent: 0.96, volume: 123456, marketCap: '2.4L Cr', marketCapValue: 240000, sector: 'Consumer Goods', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'ULTRACEMCO', name: 'UltraTech Cement', price: 9876.50, change: 123.45, changePercent: 1.27, volume: 345678, marketCap: '2.9L Cr', marketCapValue: 290000, sector: 'Materials', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'M&M', name: 'Mahindra & Mahindra', price: 1678.90, change: 23.45, changePercent: 1.42, volume: 3456789, marketCap: '2.1L Cr', marketCapValue: 210000, sector: 'Automobile', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'ADANIPORTS', name: 'Adani Ports & SEZ', price: 1234.50, change: 15.67, changePercent: 1.29, volume: 4567890, marketCap: '2.7L Cr', marketCapValue: 270000, sector: 'Infrastructure', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'COALINDIA', name: 'Coal India Ltd', price: 345.60, change: 4.56, changePercent: 1.34, volume: 8765432, marketCap: '2.1L Cr', marketCapValue: 210000, sector: 'Energy', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'IOC', name: 'Indian Oil Corporation', price: 145.60, change: 1.89, changePercent: 1.32, volume: 12345678, marketCap: '2.1L Cr', marketCapValue: 210000, sector: 'Energy', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'DMART', name: 'Avenue Supermarts', price: 3890.50, change: 45.67, changePercent: 1.19, volume: 456789, marketCap: '2.5L Cr', marketCapValue: 250000, sector: 'Consumer Goods', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'HAL', name: 'Hindustan Aeronautics', price: 3456.70, change: 56.78, changePercent: 1.67, volume: 987654, marketCap: '2.3L Cr', marketCapValue: 230000, sector: 'Industrial', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'ZOMATO', name: 'Zomato Ltd', price: 178.90, change: 5.67, changePercent: 3.27, volume: 23456789, marketCap: '1.6L Cr', marketCapValue: 160000, sector: 'Technology', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'BEL', name: 'Bharat Electronics', price: 234.50, change: 4.56, changePercent: 1.98, volume: 12345678, marketCap: '1.7L Cr', marketCapValue: 170000, sector: 'Industrial', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'SIEMENS', name: 'Siemens Ltd', price: 4567.80, change: 56.78, changePercent: 1.26, volume: 234567, marketCap: '1.6L Cr', marketCapValue: 160000, sector: 'Industrial', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'GRASIM', name: 'Grasim Industries', price: 2123.40, change: 28.90, changePercent: 1.38, volume: 876543, marketCap: '1.4L Cr', marketCapValue: 140000, sector: 'Materials', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'PIDILITIND', name: 'Pidilite Industries', price: 2678.90, change: 32.10, changePercent: 1.21, volume: 567890, marketCap: '1.4L Cr', marketCapValue: 140000, sector: 'Materials', market: 'IN', currency: '₹', capCategory: 'large' },
  
  // Mid Cap (₹10,000 - ₹50,000 Cr)
  { symbol: 'TECHM', name: 'Tech Mahindra Ltd', price: 1234.50, change: 15.67, changePercent: 1.29, volume: 2345678, marketCap: '1.2L Cr', marketCapValue: 120000, sector: 'Technology', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'HINDALCO', name: 'Hindalco Industries', price: 567.80, change: 8.90, changePercent: 1.59, volume: 6789012, marketCap: '1.3L Cr', marketCapValue: 130000, sector: 'Metals', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'INDUSINDBK', name: 'IndusInd Bank Ltd', price: 1456.70, change: 18.90, changePercent: 1.31, volume: 3456789, marketCap: '1.1L Cr', marketCapValue: 110000, sector: 'Financial Services', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'DRREDDY', name: 'Dr Reddys Laboratories', price: 5678.90, change: 67.89, changePercent: 1.21, volume: 567890, marketCap: '0.95L Cr', marketCapValue: 95000, sector: 'Healthcare', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'CIPLA', name: 'Cipla Ltd', price: 1234.50, change: 15.67, changePercent: 1.29, volume: 2345678, marketCap: '1.0L Cr', marketCapValue: 100000, sector: 'Healthcare', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'DIVISLAB', name: 'Divis Laboratories', price: 3567.80, change: 45.67, changePercent: 1.30, volume: 456789, marketCap: '0.95L Cr', marketCapValue: 95000, sector: 'Healthcare', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'EICHERMOT', name: 'Eicher Motors Ltd', price: 3890.50, change: 56.78, changePercent: 1.48, volume: 345678, marketCap: '1.1L Cr', marketCapValue: 110000, sector: 'Automobile', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'HEROMOTOCO', name: 'Hero MotoCorp Ltd', price: 4567.80, change: 67.89, changePercent: 1.51, volume: 456789, marketCap: '0.91L Cr', marketCapValue: 91000, sector: 'Automobile', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'BAJAJ-AUTO', name: 'Bajaj Auto Ltd', price: 6789.50, change: 89.01, changePercent: 1.33, volume: 345678, marketCap: '1.9L Cr', marketCapValue: 190000, sector: 'Automobile', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'BRITANNIA', name: 'Britannia Industries', price: 5123.40, change: 56.78, changePercent: 1.12, volume: 345678, marketCap: '1.2L Cr', marketCapValue: 120000, sector: 'Consumer Goods', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'DABUR', name: 'Dabur India Ltd', price: 567.80, change: 6.78, changePercent: 1.21, volume: 2345678, marketCap: '1.0L Cr', marketCapValue: 100000, sector: 'Consumer Goods', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'GODREJCP', name: 'Godrej Consumer Products', price: 1234.50, change: 14.56, changePercent: 1.19, volume: 876543, marketCap: '1.3L Cr', marketCapValue: 130000, sector: 'Consumer Goods', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'ABB', name: 'ABB India Ltd', price: 5678.90, change: 67.89, changePercent: 1.21, volume: 123456, marketCap: '1.2L Cr', marketCapValue: 120000, sector: 'Industrial', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'TATAPOWER', name: 'Tata Power Co Ltd', price: 345.60, change: 4.56, changePercent: 1.34, volume: 12345678, marketCap: '1.1L Cr', marketCapValue: 110000, sector: 'Utilities', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'BPCL', name: 'Bharat Petroleum Corp', price: 456.70, change: 5.67, changePercent: 1.26, volume: 5678901, marketCap: '0.99L Cr', marketCapValue: 99000, sector: 'Energy', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'HAVELLS', name: 'Havells India Ltd', price: 1456.70, change: 17.89, changePercent: 1.24, volume: 987654, marketCap: '0.91L Cr', marketCapValue: 91000, sector: 'Consumer Goods', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'POLYCAB', name: 'Polycab India Ltd', price: 5678.90, change: 78.90, changePercent: 1.41, volume: 345678, marketCap: '0.85L Cr', marketCapValue: 85000, sector: 'Industrial', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'IRCTC', name: 'Indian Railway Catering', price: 890.50, change: 12.34, changePercent: 1.41, volume: 2345678, marketCap: '0.71L Cr', marketCapValue: 71000, sector: 'Consumer Services', market: 'IN', currency: '₹', capCategory: 'large' },
  
  // Mid Cap - Emerging
  { symbol: 'NYKAA', name: 'FSN E-Commerce', price: 178.90, change: 2.34, changePercent: 1.33, volume: 3456789, marketCap: '0.51L Cr', marketCapValue: 51000, sector: 'Consumer Goods', market: 'IN', currency: '₹', capCategory: 'large' },
  { symbol: 'PAYTM', name: 'One97 Communications', price: 678.90, change: -12.34, changePercent: -1.78, volume: 8765432, marketCap: '0.43L Cr', marketCapValue: 43000, sector: 'Technology', market: 'IN', currency: '₹', capCategory: 'mid' },
  
  // Small Cap (<₹10,000 Cr) - High Growth Potential
  { symbol: 'HAPPSTMNDS', name: 'Happiest Minds Tech', price: 789.50, change: 23.45, changePercent: 3.06, volume: 1234567, marketCap: '0.12L Cr', marketCapValue: 12000, sector: 'Technology', market: 'IN', currency: '₹', capCategory: 'mid' },
  { symbol: 'ROUTE', name: 'Route Mobile Ltd', price: 1567.80, change: 34.56, changePercent: 2.25, volume: 234567, marketCap: '0.09L Cr', marketCapValue: 9000, sector: 'Technology', market: 'IN', currency: '₹', capCategory: 'small' },
  { symbol: 'NAZARA', name: 'Nazara Technologies', price: 789.50, change: 15.67, changePercent: 2.02, volume: 345678, marketCap: '0.05L Cr', marketCapValue: 5000, sector: 'Technology', market: 'IN', currency: '₹', capCategory: 'small' },
  { symbol: 'TANLA', name: 'Tanla Platforms Ltd', price: 856.70, change: 18.90, changePercent: 2.26, volume: 456789, marketCap: '0.11L Cr', marketCapValue: 11000, sector: 'Technology', market: 'IN', currency: '₹', capCategory: 'mid' },
  { symbol: 'LATENTVIEW', name: 'Latent View Analytics', price: 456.70, change: 12.34, changePercent: 2.78, volume: 567890, marketCap: '0.09L Cr', marketCapValue: 9000, sector: 'Technology', market: 'IN', currency: '₹', capCategory: 'small' },
  { symbol: 'CAMPUS', name: 'Campus Activewear', price: 278.90, change: 8.90, changePercent: 3.30, volume: 678901, marketCap: '0.08L Cr', marketCapValue: 8000, sector: 'Consumer Goods', market: 'IN', currency: '₹', capCategory: 'small' },
  { symbol: 'KAYNES', name: 'Kaynes Technology', price: 3456.70, change: 89.01, changePercent: 2.64, volume: 123456, marketCap: '0.19L Cr', marketCapValue: 19000, sector: 'Technology', market: 'IN', currency: '₹', capCategory: 'mid' },
  { symbol: 'IDEAFORGE', name: 'ideaForge Technology', price: 678.90, change: 23.45, changePercent: 3.58, volume: 234567, marketCap: '0.03L Cr', marketCapValue: 3000, sector: 'Technology', market: 'IN', currency: '₹', capCategory: 'small' },
  { symbol: 'NEWGEN', name: 'Newgen Software', price: 1234.50, change: 34.56, changePercent: 2.88, volume: 345678, marketCap: '0.08L Cr', marketCapValue: 8000, sector: 'Technology', market: 'IN', currency: '₹', capCategory: 'small' },
  { symbol: 'KPITTECH', name: 'KPIT Technologies', price: 1456.70, change: 45.67, changePercent: 3.23, volume: 1234567, marketCap: '0.39L Cr', marketCapValue: 39000, sector: 'Technology', market: 'IN', currency: '₹', capCategory: 'mid' },
];

// Combined stocks data
export const stocksData: Stock[] = [...usStocksData, ...indianStocksData];

// AI-Enhanced Recommended Stocks with comprehensive analysis
export const recommendedStocks: RecommendedStock[] = [
  // US Recommendations - Large Cap
  {
    symbol: 'NVDA', name: 'NVIDIA Corporation', price: 495.22, change: 12.34, changePercent: 2.56, volume: 45678901, marketCap: '1.2T', marketCapValue: 1200, sector: 'Technology', market: 'US', currency: '$', capCategory: 'large',
    recommendation: 'Strong Buy', targetPrice: 650.00, analystRating: 4.8, growthPotential: 31.2,
    reason: 'AI chip demand surge, data center growth, and gaming market dominance',
    aiScore: 94, riskLevel: 'Medium', momentum: 'Bullish', technicalSignal: 'Golden Cross - 50 DMA crossed above 200 DMA',
    fundamentalScore: 92, sentimentScore: 96
  },
  {
    symbol: 'AMD', name: 'Advanced Micro Devices', price: 138.92, change: 5.43, changePercent: 4.07, volume: 56789012, marketCap: '225B', marketCapValue: 225, sector: 'Technology', market: 'US', currency: '$', capCategory: 'large',
    recommendation: 'Strong Buy', targetPrice: 185.00, analystRating: 4.5, growthPotential: 33.2,
    reason: 'Strong AI GPU competition, server CPU market share gains, MI300X momentum',
    aiScore: 89, riskLevel: 'Medium', momentum: 'Bullish', technicalSignal: 'RSI at 58 - Room for upside',
    fundamentalScore: 86, sentimentScore: 91
  },
  {
    symbol: 'MSFT', name: 'Microsoft Corporation', price: 378.91, change: 4.56, changePercent: 1.22, volume: 23456789, marketCap: '2.8T', marketCapValue: 2800, sector: 'Technology', market: 'US', currency: '$', capCategory: 'large',
    recommendation: 'Strong Buy', targetPrice: 450.00, analystRating: 4.7, growthPotential: 18.8,
    reason: 'Azure cloud growth, Copilot AI integration, enterprise software dominance',
    aiScore: 91, riskLevel: 'Low', momentum: 'Bullish', technicalSignal: 'Trading above all major moving averages',
    fundamentalScore: 94, sentimentScore: 89
  },
  {
    symbol: 'AMZN', name: 'Amazon.com Inc.', price: 178.25, change: 3.45, changePercent: 1.97, volume: 34567890, marketCap: '1.8T', marketCapValue: 1800, sector: 'Consumer Cyclical', market: 'US', currency: '$', capCategory: 'large',
    recommendation: 'Buy', targetPrice: 220.00, analystRating: 4.4, growthPotential: 23.4,
    reason: 'AWS leadership, advertising growth, Prime ecosystem expansion',
    aiScore: 87, riskLevel: 'Low', momentum: 'Bullish', technicalSignal: 'Breakout from consolidation pattern',
    fundamentalScore: 88, sentimentScore: 86
  },
  {
    symbol: 'META', name: 'Meta Platforms Inc.', price: 505.95, change: 8.76, changePercent: 1.76, volume: 15678901, marketCap: '1.3T', marketCapValue: 1300, sector: 'Technology', market: 'US', currency: '$', capCategory: 'large',
    recommendation: 'Buy', targetPrice: 580.00, analystRating: 4.3, growthPotential: 14.6,
    reason: 'Reels monetization, WhatsApp Business, AI-driven ad efficiency',
    aiScore: 84, riskLevel: 'Medium', momentum: 'Bullish', technicalSignal: 'MACD bullish crossover',
    fundamentalScore: 82, sentimentScore: 85
  },
  {
    symbol: 'LLY', name: 'Eli Lilly and Company', price: 589.34, change: 12.45, changePercent: 2.16, volume: 2345678, marketCap: '560B', marketCapValue: 560, sector: 'Healthcare', market: 'US', currency: '$', capCategory: 'large',
    recommendation: 'Strong Buy', targetPrice: 720.00, analystRating: 4.6, growthPotential: 22.2,
    reason: 'GLP-1 drug dominance (Mounjaro/Zepbound), strong pipeline, diabetes/obesity market',
    aiScore: 92, riskLevel: 'Low', momentum: 'Bullish', technicalSignal: 'New 52-week highs with volume confirmation',
    fundamentalScore: 90, sentimentScore: 93
  },
  
  // US Recommendations - Mid Cap
  {
    symbol: 'CRWD', name: 'CrowdStrike Holdings', price: 234.56, change: 5.67, changePercent: 2.48, volume: 2345678, marketCap: '56B', marketCapValue: 56, sector: 'Technology', market: 'US', currency: '$', capCategory: 'large',
    recommendation: 'Strong Buy', targetPrice: 310.00, analystRating: 4.5, growthPotential: 32.2,
    reason: 'Cybersecurity leader, endpoint protection growth, expanding enterprise deals',
    aiScore: 88, riskLevel: 'Medium', momentum: 'Bullish', technicalSignal: 'Cup and handle pattern forming',
    fundamentalScore: 85, sentimentScore: 90
  },
  {
    symbol: 'DDOG', name: 'Datadog Inc.', price: 123.45, change: 3.21, changePercent: 2.67, volume: 3456789, marketCap: '40B', marketCapValue: 40, sector: 'Technology', market: 'US', currency: '$', capCategory: 'large',
    recommendation: 'Buy', targetPrice: 160.00, analystRating: 4.3, growthPotential: 29.6,
    reason: 'Cloud monitoring essential, multi-product adoption, AI observability growth',
    aiScore: 83, riskLevel: 'Medium', momentum: 'Bullish', technicalSignal: 'Strong support at 50 DMA',
    fundamentalScore: 81, sentimentScore: 84
  },
  
  // US Recommendations - Small/Mid Cap Growth
  {
    symbol: 'SOFI', name: 'SoFi Technologies', price: 8.45, change: 0.34, changePercent: 4.19, volume: 23456789, marketCap: '8B', marketCapValue: 8, sector: 'Financial Services', market: 'US', currency: '$', capCategory: 'mid',
    recommendation: 'Buy', targetPrice: 12.00, analystRating: 3.9, growthPotential: 42.0,
    reason: 'Fintech disruption, student loan refinancing, bank charter advantage',
    aiScore: 76, riskLevel: 'High', momentum: 'Bullish', technicalSignal: 'Breaking out of downtrend',
    fundamentalScore: 72, sentimentScore: 79
  },
  {
    symbol: 'PLTR', name: 'Palantir Technologies', price: 23.45, change: 1.23, changePercent: 5.54, volume: 45678901, marketCap: '52B', marketCapValue: 52, sector: 'Technology', market: 'US', currency: '$', capCategory: 'large',
    recommendation: 'Buy', targetPrice: 30.00, analystRating: 4.0, growthPotential: 27.9,
    reason: 'Government AI contracts, commercial growth accelerating, AIP platform momentum',
    aiScore: 81, riskLevel: 'High', momentum: 'Bullish', technicalSignal: 'High volume breakout',
    fundamentalScore: 78, sentimentScore: 84
  },
  
  // Indian Recommendations - Large Cap
  {
    symbol: 'RELIANCE', name: 'Reliance Industries', price: 2456.75, change: 34.50, changePercent: 1.42, volume: 12345678, marketCap: '16.6L Cr', marketCapValue: 1660000, sector: 'Energy', market: 'IN', currency: '₹', capCategory: 'large',
    recommendation: 'Strong Buy', targetPrice: 3000.00, analystRating: 4.6, growthPotential: 22.1,
    reason: 'Jio 5G expansion, retail growth, green energy investments',
    aiScore: 90, riskLevel: 'Low', momentum: 'Bullish', technicalSignal: 'Breaking resistance at 2400 level',
    fundamentalScore: 91, sentimentScore: 88
  },
  {
    symbol: 'TCS', name: 'Tata Consultancy Services', price: 3892.40, change: 45.20, changePercent: 1.17, volume: 2345678, marketCap: '14.2L Cr', marketCapValue: 1420000, sector: 'Technology', market: 'IN', currency: '₹', capCategory: 'large',
    recommendation: 'Buy', targetPrice: 4500.00, analystRating: 4.4, growthPotential: 15.6,
    reason: 'Strong deal pipeline, AI services growth, consistent dividend payer',
    aiScore: 85, riskLevel: 'Low', momentum: 'Neutral', technicalSignal: 'Consolidating near all-time highs',
    fundamentalScore: 89, sentimentScore: 82
  },
  {
    symbol: 'HDFCBANK', name: 'HDFC Bank Ltd', price: 1678.90, change: 23.45, changePercent: 1.42, volume: 8765432, marketCap: '12.8L Cr', marketCapValue: 1280000, sector: 'Financial Services', market: 'IN', currency: '₹', capCategory: 'large',
    recommendation: 'Strong Buy', targetPrice: 2000.00, analystRating: 4.7, growthPotential: 19.1,
    reason: 'Post-merger synergies, robust asset quality, digital banking leadership',
    aiScore: 89, riskLevel: 'Low', momentum: 'Bullish', technicalSignal: 'Inverse head and shoulders pattern',
    fundamentalScore: 92, sentimentScore: 86
  },
  {
    symbol: 'ICICIBANK', name: 'ICICI Bank Ltd', price: 1023.45, change: 15.67, changePercent: 1.55, volume: 9876543, marketCap: '7.2L Cr', marketCapValue: 720000, sector: 'Financial Services', market: 'IN', currency: '₹', capCategory: 'large',
    recommendation: 'Strong Buy', targetPrice: 1250.00, analystRating: 4.6, growthPotential: 22.1,
    reason: 'Strong loan growth, improving asset quality, digital banking success',
    aiScore: 88, riskLevel: 'Low', momentum: 'Bullish', technicalSignal: 'Price above all EMAs',
    fundamentalScore: 90, sentimentScore: 85
  },
  {
    symbol: 'BHARTIARTL', name: 'Bharti Airtel Ltd', price: 1156.70, change: 21.30, changePercent: 1.88, volume: 4567890, marketCap: '6.9L Cr', marketCapValue: 690000, sector: 'Telecom', market: 'IN', currency: '₹', capCategory: 'large',
    recommendation: 'Strong Buy', targetPrice: 1400.00, analystRating: 4.5, growthPotential: 21.0,
    reason: '5G rollout, ARPU improvement, Africa business expansion',
    aiScore: 87, riskLevel: 'Low', momentum: 'Bullish', technicalSignal: 'Ascending triangle breakout',
    fundamentalScore: 85, sentimentScore: 88
  },
  {
    symbol: 'TATAMOTORS', name: 'Tata Motors Ltd', price: 789.50, change: 15.67, changePercent: 2.02, volume: 12345678, marketCap: '2.9L Cr', marketCapValue: 290000, sector: 'Automobile', market: 'IN', currency: '₹', capCategory: 'large',
    recommendation: 'Strong Buy', targetPrice: 1000.00, analystRating: 4.5, growthPotential: 26.7,
    reason: 'EV market leadership, JLR turnaround, domestic market dominance',
    aiScore: 86, riskLevel: 'Medium', momentum: 'Bullish', technicalSignal: 'Breaking multi-year resistance',
    fundamentalScore: 83, sentimentScore: 88
  },
  
  // Indian Recommendations - Mid Cap
  {
    symbol: 'KPITTECH', name: 'KPIT Technologies', price: 1456.70, change: 45.67, changePercent: 3.23, volume: 1234567, marketCap: '0.39L Cr', marketCapValue: 39000, sector: 'Technology', market: 'IN', currency: '₹', capCategory: 'mid',
    recommendation: 'Strong Buy', targetPrice: 1850.00, analystRating: 4.4, growthPotential: 27.0,
    reason: 'Automotive software leader, EV transition beneficiary, strong order book',
    aiScore: 85, riskLevel: 'Medium', momentum: 'Bullish', technicalSignal: 'Flag pattern breakout',
    fundamentalScore: 83, sentimentScore: 86
  },
  {
    symbol: 'ZOMATO', name: 'Zomato Ltd', price: 178.90, change: 5.67, changePercent: 3.27, volume: 23456789, marketCap: '1.6L Cr', marketCapValue: 160000, sector: 'Technology', market: 'IN', currency: '₹', capCategory: 'large',
    recommendation: 'Buy', targetPrice: 220.00, analystRating: 4.1, growthPotential: 23.0,
    reason: 'Food delivery dominance, Blinkit growth, path to profitability',
    aiScore: 79, riskLevel: 'Medium', momentum: 'Bullish', technicalSignal: 'Bullish engulfing pattern',
    fundamentalScore: 75, sentimentScore: 82
  },
  {
    symbol: 'HAL', name: 'Hindustan Aeronautics', price: 3456.70, change: 56.78, changePercent: 1.67, volume: 987654, marketCap: '2.3L Cr', marketCapValue: 230000, sector: 'Industrial', market: 'IN', currency: '₹', capCategory: 'large',
    recommendation: 'Strong Buy', targetPrice: 4200.00, analystRating: 4.5, growthPotential: 21.5,
    reason: 'Defense spending boom, LCA Tejas orders, Make in India beneficiary',
    aiScore: 88, riskLevel: 'Low', momentum: 'Bullish', technicalSignal: 'Strong institutional buying',
    fundamentalScore: 87, sentimentScore: 89
  },
  
  // Indian Recommendations - Small Cap (High Growth)
  {
    symbol: 'KAYNES', name: 'Kaynes Technology', price: 3456.70, change: 89.01, changePercent: 2.64, volume: 123456, marketCap: '0.19L Cr', marketCapValue: 19000, sector: 'Technology', market: 'IN', currency: '₹', capCategory: 'mid',
    recommendation: 'Strong Buy', targetPrice: 4500.00, analystRating: 4.3, growthPotential: 30.2,
    reason: 'Electronics manufacturing services, PLI scheme beneficiary, IoT growth',
    aiScore: 82, riskLevel: 'High', momentum: 'Bullish', technicalSignal: 'New all-time high with volume',
    fundamentalScore: 79, sentimentScore: 84
  },
  {
    symbol: 'HAPPSTMNDS', name: 'Happiest Minds Tech', price: 789.50, change: 23.45, changePercent: 3.06, volume: 1234567, marketCap: '0.12L Cr', marketCapValue: 12000, sector: 'Technology', market: 'IN', currency: '₹', capCategory: 'mid',
    recommendation: 'Buy', targetPrice: 1000.00, analystRating: 4.0, growthPotential: 26.7,
    reason: 'Digital transformation specialist, cloud services growth, AI/ML expertise',
    aiScore: 78, riskLevel: 'High', momentum: 'Bullish', technicalSignal: 'Recovery from support level',
    fundamentalScore: 76, sentimentScore: 80
  },
  {
    symbol: 'IDEAFORGE', name: 'ideaForge Technology', price: 678.90, change: 23.45, changePercent: 3.58, volume: 234567, marketCap: '0.03L Cr', marketCapValue: 3000, sector: 'Technology', market: 'IN', currency: '₹', capCategory: 'small',
    recommendation: 'Buy', targetPrice: 900.00, analystRating: 3.8, growthPotential: 32.6,
    reason: 'Drone technology leader, defense contracts, surveillance market growth',
    aiScore: 74, riskLevel: 'High', momentum: 'Bullish', technicalSignal: 'Forming base pattern',
    fundamentalScore: 71, sentimentScore: 77
  },
  {
    symbol: 'LATENTVIEW', name: 'Latent View Analytics', price: 456.70, change: 12.34, changePercent: 2.78, volume: 567890, marketCap: '0.09L Cr', marketCapValue: 9000, sector: 'Technology', market: 'IN', currency: '₹', capCategory: 'small',
    recommendation: 'Buy', targetPrice: 600.00, analystRating: 3.9, growthPotential: 31.4,
    reason: 'Data analytics specialist, Fortune 500 clients, AI/ML consulting growth',
    aiScore: 75, riskLevel: 'High', momentum: 'Neutral', technicalSignal: 'Testing resistance level',
    fundamentalScore: 73, sentimentScore: 76
  },
];

// AI Recommendation Engine - Scoring Algorithm
export function calculateAIScore(stock: Stock): number {
  let score = 50; // Base score
  
  // Momentum Factor (based on change percent)
  if (stock.changePercent > 3) score += 15;
  else if (stock.changePercent > 1) score += 10;
  else if (stock.changePercent > 0) score += 5;
  else if (stock.changePercent < -3) score -= 10;
  else if (stock.changePercent < 0) score -= 5;
  
  // Volume Factor
  if (stock.volume > 10000000) score += 10;
  else if (stock.volume > 1000000) score += 5;
  
  // Sector Premium (High growth sectors)
  const highGrowthSectors = ['Technology', 'Healthcare', 'Financial Services', 'Consumer Cyclical'];
  if (highGrowthSectors.includes(stock.sector)) score += 10;
  
  // Market Cap Stability
  if (stock.capCategory === 'large') score += 5;
  else if (stock.capCategory === 'small') score += 3; // Higher growth potential
  
  return Math.min(100, Math.max(0, score));
}

// Get risk level based on volatility and cap
export function getRiskLevel(stock: Stock): 'Low' | 'Medium' | 'High' {
  const volatility = Math.abs(stock.changePercent);
  if (stock.capCategory === 'small' || volatility > 4) return 'High';
  if (stock.capCategory === 'mid' || volatility > 2) return 'Medium';
  return 'Low';
}

// Get momentum signal
export function getMomentum(stock: Stock): 'Bullish' | 'Neutral' | 'Bearish' {
  if (stock.changePercent > 1.5) return 'Bullish';
  if (stock.changePercent < -1.5) return 'Bearish';
  return 'Neutral';
}

export const marketIndices = [
  { name: 'S&P 500', value: 4783.45, change: 25.67, changePercent: 0.54 },
  { name: 'NASDAQ', value: 15003.22, change: 156.78, changePercent: 1.06 },
  { name: 'DOW JONES', value: 37545.33, change: 112.45, changePercent: 0.30 },
];

export const indianIndices = [
  { name: 'NIFTY 50', value: 21456.78, change: 145.32, changePercent: 0.68 },
  { name: 'SENSEX', value: 71234.56, change: 478.90, changePercent: 0.68 },
  { name: 'NIFTY BANK', value: 47890.12, change: 234.56, changePercent: 0.49 },
];

// Function to simulate price updates
export function simulatePriceUpdate(stock: Stock): Stock {
  const changeAmount = (Math.random() - 0.5) * (stock.market === 'IN' ? 20 : 2);
  const newPrice = Math.max(0.01, stock.price + changeAmount);
  const newChange = newPrice - (stock.price - stock.change);
  const newChangePercent = ((newPrice / (stock.price - stock.change)) - 1) * 100;
  
  return {
    ...stock,
    price: parseFloat(newPrice.toFixed(2)),
    change: parseFloat(newChange.toFixed(2)),
    changePercent: parseFloat(newChangePercent.toFixed(2)),
  };
}

// Calculate similarity score between two strings (fuzzy matching)
function calculateSimilarity(str1: string, str2: string): number {
  const s1 = str1.toLowerCase();
  const s2 = str2.toLowerCase();
  
  // Exact match
  if (s1 === s2) return 100;
  
  // Contains match
  if (s2.includes(s1)) return 80;
  if (s1.includes(s2)) return 75;
  
  // Word boundary match
  const words = s2.split(/\s+/);
  for (const word of words) {
    if (word.startsWith(s1)) return 70;
    if (word.includes(s1)) return 60;
  }
  
  // Levenshtein-based similarity for typos
  const maxLen = Math.max(s1.length, s2.length);
  if (maxLen === 0) return 100;
  
  const distance = levenshteinDistance(s1, s2);
  const similarity = ((maxLen - distance) / maxLen) * 100;
  
  return similarity;
}

// Levenshtein distance for fuzzy matching
function levenshteinDistance(str1: string, str2: string): number {
  const m = str1.length;
  const n = str2.length;
  
  if (m === 0) return n;
  if (n === 0) return m;
  
  const dp: number[][] = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));
  
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(
          dp[i - 1][j],     // deletion
          dp[i][j - 1],     // insertion
          dp[i - 1][j - 1]  // substitution
        );
      }
    }
  }
  
  return dp[m][n];
}

// Enhanced search with fuzzy matching and relevance scoring
export function searchStocks(query: string, stocks: Stock[]): Stock[] {
  if (!query.trim()) return stocks;
  
  const upperQuery = query.toUpperCase().trim();
  const lowerQuery = query.toLowerCase().trim();
  
  // Calculate relevance score for each stock
  const scoredStocks = stocks.map(stock => {
    let score = 0;
    
    // Symbol matching (highest priority)
    const symbolScore = calculateSimilarity(upperQuery, stock.symbol);
    if (stock.symbol === upperQuery) score += 100; // Exact symbol match
    else if (stock.symbol.startsWith(upperQuery)) score += 90;
    else if (stock.symbol.includes(upperQuery)) score += 80;
    else if (symbolScore > 50) score += symbolScore * 0.7;
    
    // Name matching
    const nameUpper = stock.name.toUpperCase();
    const nameLower = stock.name.toLowerCase();
    if (nameUpper.includes(upperQuery)) score += 70;
    else {
      // Check individual words in name
      const nameWords = nameLower.split(/\s+/);
      for (const word of nameWords) {
        if (word.startsWith(lowerQuery)) {
          score += 60;
          break;
        }
        if (word.includes(lowerQuery)) {
          score += 50;
          break;
        }
      }
      
      // Fuzzy match on name
      const nameScore = calculateSimilarity(lowerQuery, nameLower);
      if (nameScore > 40) score += nameScore * 0.5;
    }
    
    // Sector matching
    if (stock.sector.toUpperCase().includes(upperQuery)) {
      score += 30;
    }
    
    return { stock, score };
  });
  
  // Filter stocks with minimum score and sort by relevance
  return scoredStocks
    .filter(item => item.score > 25)
    .sort((a, b) => b.score - a.score)
    .map(item => item.stock);
}
