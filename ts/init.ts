// these must be first
import './utils/qs';
import './ui/internalErrorDialog';
import './ui/dialog';
import './ui/mdlUpgrade';
// ./ui/ alphabetical order
import './ui/editor';
import './ui/fileName';
import './ui/nav';
import './ui/projectName';
import './ui/topBar';
// ./ alphabetical order
import { applyAll } from './settings'; applyAll();
// must be last
import './ui/showPage';
// temporary
import { open } from './project'; open('Welcome');