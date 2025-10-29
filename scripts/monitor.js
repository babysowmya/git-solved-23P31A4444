/**
 * System Monitoring Script - Staging
 * Extended version with latency tracking and detailed logs
 */

const monitorConfig = {
  interval: 30000, // 30 seconds
  alertThreshold: 70,
  metricsEndpoint: 'http://localhost:5000/metrics',
  enableLatencyCheck: true
};

console.log('=================================');
console.log('DevOps Simulator - Monitor v2.0 (Staging)');
console.log('=================================');

function checkSystemHealth() {
  console.log(`[${new Date().toISOString()}] Performing system diagnostics...`);
  
  // Check CPU usage
  console.log('✓ CPU usage: Stable');
  
  // Check Memory
  console.log('✓ Memory usage: Within limits');
  
  // Check API Latency
  if (monitorConfig.enableLatencyCheck) {
    console.log('✓ API Latency: 120ms');
  }
  
  console.log('System Status: OPTIMAL');
}

// Start monitoring
console.log(`Monitoring every ${monitorConfig.interval}ms`);
setInterval(checkSystemHealth, monitorConfig.interval);

// Run first check immediately
checkSystemHealth();
console.log("Monitoring Development Mode");