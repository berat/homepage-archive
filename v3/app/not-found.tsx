import Divider from '@/components/divider';
import ContactList from '@/components/list/contact';

export default function NotFound() {
  return (
    <main>
      <h3 className="text-slate-700 text-xl my-16">
        This page could not be found. You can contact me from the links below.
      </h3>
      <Divider />
      <ContactList />
    </main>
  );
}
