export default function page() {
  return (
    <div className="flex flex-col  justify-center pt-4">
      <div className="w-2/3 lg:w-1/3 flex flex-col text-center justify-center mx-auto">
        <h1 className="font-medium text-center text-4xl ">
          About{" "}
          <span className="flex text-red-600 justify-center lg:text-left">
            Redemption
          </span>{" "}
          Hymns PWA
        </h1>
        <p className="pt-2 text-center">
          Welcome to Redemption Songs PWA! We are thrilled to introduce you to a
          platform where you can access redemption hymns.
        </p>
        <div className="border-b-4 border-dotted border-red-600 w-20 justify-center mx-auto py-3"></div>
      </div>

      <div className="w-2/3 lg:w-1/3 flex flex-col text-center justify-center mx-auto py-6">
        <h1 className="font-medium text-center text-4xl">
          <span className="text-red-600">Get</span> in Touch
        </h1>
        <p className="text-center pt-2">We would love to hear from you! </p>
        <p className="text-center">
          Whether you have corrections, suggestions, or just want to say hello,
          feel free to reach out to the developer:
        </p>
        <p className="text-center">Name: Peter Tembo</p>
        <p>Email: tembopeter90@gmail.com</p>
        <p className="text-center">Location: Lusaka, Zambia</p>
        <div className="border-b-4 border-dotted border-red-600 w-20 justify-center mx-auto py-3"></div>
      </div>

      <div className="w-2/3 lg:w-1/3 flex flex-col text-center justify-center mx-auto pb-20">
        <h1 className="text-center">
          Thank you for being a part of the Redemption Songs PWA community!
        </h1>
        <br />
        <h1>
          Click the{" "} 
          <a
            href="https://youtu.be/XQi8uXP2j7U?si=-WGU9I_XPIN9qMEX"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 font-semibold"
          >
            link
          </a>{" "}
          to watch how you can contribute by adding songs to this application.
        </h1>
      </div>
    </div>
  );
}
