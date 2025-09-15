import { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { GraduationCap, LogOut, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const [userCollege, setUserCollege] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [proofUploaded, setProofUploaded] = useState(false);
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);
  const [draftName, setDraftName] = useState('');
  const [draftEmail, setDraftEmail] = useState('');
  const [draftPhone, setDraftPhone] = useState('');
  const [draftCollege, setDraftCollege] = useState('');

  useEffect(() => {
    try {
      setUserCollege(localStorage.getItem('userCollege') || '');
      setUserName(localStorage.getItem('userName') || '');
      setUserEmail(localStorage.getItem('userEmail') || '');
      setUserPhone(localStorage.getItem('userPhone') || '');
      setProofUploaded(!!localStorage.getItem('userProof'));
    } catch {}
  }, []);

  const startEdit = () => {
    setDraftName(userName);
    setDraftEmail(userEmail);
    setDraftPhone(userPhone);
    setDraftCollege(userCollege);
    setEditing(true);
  };

  const cancelEdit = () => {
    setEditing(false);
  };

  const saveEdit = () => {
    try {
      setUserName(draftName);
      localStorage.setItem('userName', draftName);
      // email usually immutable; still allow if changed
      setUserEmail(draftEmail);
      localStorage.setItem('userEmail', draftEmail);
      setUserPhone(draftPhone);
      if (draftPhone) localStorage.setItem('userPhone', draftPhone); else localStorage.removeItem('userPhone');
      setUserCollege(draftCollege);
      localStorage.setItem('userCollege', draftCollege);
    } catch {}
    setEditing(false);
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem('userCollege');
      localStorage.removeItem('userName');
      localStorage.removeItem('userEmail');
      localStorage.removeItem('userPhone');
      localStorage.removeItem('userProof');
    } catch {}
    navigate('/auth');
  };

  return (
    <div className="min-h-screen bg-background py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)} aria-label="Back">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold">Account</h1>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>User Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            {!editing && (
              <>
                <InfoRow label="Full Name" value={userName || '—'} />
                <InfoRow label="Email" value={userEmail || '—'} />
                <InfoRow label="Phone (Optional)" value={userPhone || 'Not provided'} />
                <InfoRow label="College" value={userCollege || '—'} />
                <InfoRow label="College Proof" value={proofUploaded ? 'Uploaded' : 'Not uploaded'} />
                <div className="flex flex-wrap gap-3 pt-4">
                  <Button onClick={startEdit}>Edit Profile</Button>
                  <Button variant="destructive" onClick={handleLogout}>
                    <LogOut className="w-4 h-4 mr-1" /> Logout
                  </Button>
                </div>
              </>
            )}
            {editing && (
              <div className="space-y-4">
                <EditField label="Full Name" value={draftName} onChange={setDraftName} required />
                <EditField label="Email" value={draftEmail} onChange={setDraftEmail} type="email" required />
                <EditField label="Phone (Optional)" value={draftPhone} onChange={setDraftPhone} type="tel" />
                <EditField label="College" value={draftCollege} onChange={setDraftCollege} required />
                <InfoRow label="College Proof" value={proofUploaded ? 'Uploaded (fixed)' : 'Not uploaded'} />
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button onClick={saveEdit} disabled={!draftName.trim() || !draftEmail.trim() || !draftCollege.trim()}>Save</Button>
                  <Button variant="outline" onClick={cancelEdit}>Cancel</Button>
                  <Button variant="destructive" onClick={handleLogout}>
                    <LogOut className="w-4 h-4 mr-1" /> Logout
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <div className="space-y-1">
    <p className="text-xs uppercase tracking-wide text-muted-foreground font-medium">{label}</p>
    <p className="font-medium">{value}</p>
  </div>
);

const EditField = ({ label, value, onChange, type = 'text', required }: { label: string; value: string; onChange: (v: string)=>void; type?: string; required?: boolean }) => (
  <div className="space-y-1">
    <p className="text-xs uppercase tracking-wide text-muted-foreground font-medium">{label}{required && ' *'}</p>
    <Input value={value} type={type} required={required} onChange={(e)=>onChange(e.target.value)} />
  </div>
);

export default Account;
