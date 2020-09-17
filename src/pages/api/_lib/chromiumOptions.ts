import chrome from "chrome-aws-lambda";

const chromeExecPath = {
  win32: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
};

const exePath = chromeExecPath[process.platform];

interface Options {
  args: string[];
  executablePath: string;
  headless: boolean;
}

export async function getOptions(isDev: boolean): Promise<Options> {
  let options: Options;

  if (isDev) {
    options = {
      args: [],
      executablePath: exePath,
      headless: true,
    };
  } else {
    options = {
      args: chrome.args,
      executablePath: await chrome.executablePath,
      headless: chrome.headless,
    };
  }

  return options;
}
