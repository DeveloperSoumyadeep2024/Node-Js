const os = require('os');

// Retrieve the hostname
const hostname = os.hostname();
console.log(`Hostname: ${hostname}`);

// Retrieve the operating system type
const osType = os.type();
console.log(`Operating System Type: ${osType}`);

// Retrieve the platform
const platform = os.platform();
console.log(`Platform: ${platform}`);

// Retrieve the architecture
const arch = os.arch();
console.log(`Architecture: ${arch}`);

// Retrieve the number of CPU cores
const cpus = os.cpus();
console.log(`Number of CPU Cores: ${cpus.length}`);

// Retrieve the total memory
const totalMemory = os.totalmem();
console.log(`Total Memory: ${(totalMemory / (1024 ** 3)).toFixed(2)} GB`);

// Retrieve the free memory
const freeMemory = os.freemem();
console.log(`Free Memory: ${(freeMemory / (1024 ** 3)).toFixed(2)} GB`);

// Retrieve the uptime in seconds
const uptime = os.uptime();
console.log(`System Uptime: ${(uptime / 3600).toFixed(2)} hours`);

// Retrieve the home directory
const homeDir = os.homedir();
console.log(`Home Directory: ${homeDir}`);

// Retrieve the network interfaces
const networkInterfaces = os.networkInterfaces();
console.log('Network Interfaces:');
Object.keys(networkInterfaces).forEach((interface) => {
  networkInterfaces[interface].forEach((details) => {
    console.log(`  ${interface} - ${details.family}: ${details.address}`);
  });
});

// Retrieve the operating system release
const osRelease = os.release();
console.log(`Operating System Release: ${osRelease}`);

// Retrieve the default temporary directory
const tmpDir = os.tmpdir();
console.log(`Default Temporary Directory: ${tmpDir}`);

// Retrieve the endianness of the CPU
const endianness = os.endianness();
console.log(`CPU Endianness: ${endianness}`);
