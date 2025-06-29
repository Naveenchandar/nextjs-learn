import { LABELS } from "@/labels";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
        <div>
            <div>{LABELS.footer.storeName}</div>
            <ul>
                <li>{LABELS.footer.links.home}</li>
                <li>{LABELS.footer.links.about}</li>
                <li>{LABELS.footer.links.termsAndConditions}</li>
                <li>{LABELS.footer.links.shippingAndReturns}</li>
                <li>{LABELS.footer.links.privacyPolicy}</li>
                <li>{LABELS.footer.links.faq}</li>
            </ul>
        </div>
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {LABELS.footer.storeName}. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Built with Next.js and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}